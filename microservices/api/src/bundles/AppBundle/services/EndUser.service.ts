import {
  Service,
  Inject,
  EventManager,
  ContainerInstance,
} from "@bluelibs/core";
import { ObjectId } from "@bluelibs/ejson";
import { PasswordService } from "@bluelibs/password-bundle";
import { PermissionService } from "@bluelibs/security-bundle";
import { XAuthService } from "@bluelibs/x-auth-bundle";
import {
  Book,
  BooksCollection,
  EndUserBookChapterTest,
  EndUserBooksCollection,
  EndUserBookTest,
  EndUserBookTestsCollection,
  EndUsersCollection,
  UserRole,
  UsersCollection,
} from "../collections";
import { PermissionDomain } from "../constants";
import {
  BookDoesNotExistException,
  ChapterDoesNotExistException,
  EndUserAlreadyOwnsBookException,
  EndUserDoesNotOwnBookException,
} from "../exceptions";
import { ChatGPTService } from "./ChatGPT.service";
import {
  EndUserBookChapterDetails,
  EndUserBookDetails,
} from "./entities/EndUserBookDetails";
import { EndUsersSearchBookResponse } from "./entities/EndUsersSearchBookResponse";
import {
  EndUsersAddBookToLibraryInput,
  EndUsersGenerateTestInput,
  EndUsersGetBookInput,
  EndUsersLoginInput,
  EndUsersRegisterInput,
  EndUsersSearchBookInput,
} from "./inputs";
import { LoggerService } from "./Logger.service";

@Service()
export class EndUserService {
  @Inject()
  private xAuthService: XAuthService;

  @Inject()
  private endUsersCollection: EndUsersCollection;

  @Inject()
  private passwordService: PasswordService;

  @Inject()
  private permissionService: PermissionService;

  @Inject()
  private chatGPTService: ChatGPTService;

  @Inject()
  private booksCollection: BooksCollection;

  @Inject()
  private loggerService: LoggerService;

  @Inject()
  private endUserBooksCollection: EndUserBooksCollection;

  @Inject()
  private endUserBookTestsCollection: EndUserBookTestsCollection;

  public async register(input: EndUsersRegisterInput) {
    this.loggerService.info(this.loggerService.formatResolverArgs(input));

    // TODO: check if username is taken (the framework assumes username = e-mail, which is kinda dumb but whatever)
    const userId = (
      await this.xAuthService.register({
        email: input.email,
        password: input.password,
      })
    ).userId as ObjectId;

    await this.passwordService.updateData(userId, {
      username: input.username,
    });

    await this.endUsersCollection.insertOne(
      {
        level: 1,

        gold: 0,
        experience: 0,

        ownerId: userId,
      },
      {
        context: {
          userId,
        },
      }
    );

    await this.permissionService.add({
      userId,
      domain: PermissionDomain.APP,
      permission: UserRole.END_USER,
    });
  }

  public async login(input: EndUsersLoginInput) {
    this.loggerService.info(this.loggerService.formatResolverArgs(input));

    const response = (await this.xAuthService.login({
      username: input.usernameOrEmail,
      password: input.password,
    })) as { token: string };

    return response.token;
  }

  public async searchBook(
    input: EndUsersSearchBookInput,
    userId: ObjectId
  ): Promise<EndUsersSearchBookResponse> {
    this.loggerService.info(
      this.loggerService.formatResolverArgs(input, userId)
    );

    const book = await this.booksCollection.findOne({
      title: input.title,
    });

    if (book) {
      this.loggerService.info(`Found book in cache - ${JSON.stringify(book)}`);

      return {
        bookId: book._id,
        exists: true,
        author: book.author,
        title: book.title,
      };
    }

    this.loggerService.info(`Book not found in cache, querying GPT`);

    const response = await this.chatGPTService.getKnowledgeAboutBook(
      input.title
    );

    if (response.exists) {
      this.loggerService.info(
        `Book found in GPT, caching it - ${JSON.stringify(response)}`
      );

      const { insertedId: bookId } = await this.booksCollection.insertOne(
        {
          title: response.title,
          author: response.author,
          chapters: [],
          genres: [],
        },
        {
          context: { userId },
        }
      );

      this.updateBookChapters(response.title, bookId, userId);

      return {
        ...response,
        bookId,
      };
    }

    this.loggerService.info(`Book not found in GPT`);

    return {
      exists: false,
    };
  }

  // TODO: should have "BookService", obviously
  private async updateBookChapters(
    title: string,
    bookId: ObjectId,
    userId: ObjectId
  ) {
    const chapters = await this.chatGPTService.getBookChapters(title);

    await this.booksCollection.updateOne(
      {
        _id: bookId,
      },
      {
        $set: {
          chapters,
        },
      },
      {
        context: {
          userId,
        },
      }
    );
  }

  public async addBookToLibrary(
    input: EndUsersAddBookToLibraryInput,
    userId: ObjectId
  ) {
    this.loggerService.info(
      this.loggerService.formatResolverArgs(input, userId)
    );

    const endUserId = await this.getIdByUserId(userId);

    const book = await this.booksCollection.findOne({
      _id: input.bookId,
    });

    if (!book) {
      throw new BookDoesNotExistException();
    }

    const endUserBook = await this.endUserBooksCollection.findOne({
      endUserId,
      bookId: input.bookId,
    });

    if (endUserBook) {
      throw new EndUserAlreadyOwnsBookException();
    }

    const chapterTests: EndUserBookChapterTest[] = book.chapters.map(
      (chapter) => ({
        chapter,
        isPassed: false,
        numberOfTries: 0,
        testId: undefined,
      })
    );

    const { insertedId } = await this.endUserBooksCollection.insertOne(
      {
        endUserId,
        bookId: book._id,
        chapterTests,
        progress: 0,
      },
      {
        context: {
          userId,
        },
      }
    );

    return insertedId;
  }

  async getBook(
    input: EndUsersGetBookInput,
    userId: ObjectId
  ): Promise<EndUserBookDetails> {
    const endUserId = await this.getIdByUserId(userId);

    const endUserBook = await this.endUserBooksCollection.queryOne({
      $: {
        filters: {
          _id: input.endUserBookId,
          endUserId,
        },
      },

      book: {
        title: 1,
        author: 1,
        chapters: 1,
      },

      progress: 1,
      chapterTests: {
        chapter: 1,
        isPassed: 1,
        numberOfTries: 1,
      },
    });

    if (!endUserBook) {
      throw new EndUserDoesNotOwnBookException();
    }

    const testDetailsByChapterName = endUserBook.chapterTests.reduce(
      (acc, test) => {
        acc[test.chapter] = {
          isPassed: test.isPassed,
          numberOfTries: test.numberOfTries,
        };

        return acc;
      },
      {} as Record<string, Omit<EndUserBookChapterTest, "chapter" | "testId">>
    );

    const chapters: EndUserBookChapterDetails[] = endUserBook.book.chapters.map(
      (title) => {
        return {
          title,

          ...testDetailsByChapterName[title],
        };
      }
    );

    return {
      author: endUserBook.book.author,
      title: endUserBook.book.title,
      progress: endUserBook.progress,
      chapters,
    };
  }

  async generateTest(input: EndUsersGenerateTestInput, userId: ObjectId) {
    const endUserId = await this.getIdByUserId(userId);

    const endUserBook = await this.endUserBooksCollection.queryOne({
      $: {
        filters: {
          _id: input.endUserBookId,
          endUserId,
        },
      },

      book: {
        title: 1,
        chapters: 1,
      },

      chapterTests: {
        chapter: 1,
        testId: 1,
      },
    });

    if (!endUserBook) {
      throw new EndUserDoesNotOwnBookException();
    }

    if (
      endUserBook.book.chapters.findIndex(
        (chapter) => chapter === input.chapter
      ) === -1
    ) {
      throw new ChapterDoesNotExistException();
    }

    // TODO: handle this
    const existingTestId = endUserBook.chapterTests.find(
      (chapterTest) => chapterTest.chapter === input.chapter
    )?.testId;

    const test = await this.chatGPTService.generateQuestionsAboutBookChapter(
      endUserBook.book.title,
      input.chapter
    );

    console.log(test);

    // const { insertedId } = await this.endUserBookTestsCollection.insertOne(
    //   {
    //     questions: [],
    //   },
    //   {
    //     context: {
    //       userId,
    //     },
    //   }
    // );
  }

  async getIdByUserId(userId: ObjectId) {
    return (await this.endUsersCollection.findOne({ ownerId: userId }))._id;
  }
}
