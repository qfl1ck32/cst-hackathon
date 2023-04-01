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
  BooksCollection,
  EndUsersCollection,
  UserRole,
  UsersCollection,
} from "../collections";
import { PermissionDomain } from "../constants";
import { ChatGPTService } from "./ChatGPT.service";
import { EndUsersSearchBookResponse } from "./entities/EndUsersSearchBookResponse";
import {
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

      console.log({ response });

      await this.booksCollection.insertOne(
        {
          title: response.title,
          author: response.author,
        },
        {
          context: { userId },
        }
      );
    } else {
      this.loggerService.info(`Book not found in GPT`);
    }

    return response;
  }
}
