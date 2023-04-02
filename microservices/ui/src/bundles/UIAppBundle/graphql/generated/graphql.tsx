import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  EJSON: any;
  JSON: any;
  JSONObject: any;
  ObjectId: any;
  Upload: any;
};

export type Address = {
  __typename?: "Address";
  city: Scalars["String"];
  country: Scalars["String"];
};

export type AddressInput = {
  city: Scalars["String"];
  country: Scalars["String"];
};

export type AppFile = {
  __typename?: "AppFile";
  _id: Scalars["ID"];
  createdAt?: Maybe<Scalars["Date"]>;
  downloadUrl: Scalars["String"];
  mimeType: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  path: Scalars["String"];
  resourceId?: Maybe<Scalars["String"]>;
  resourceType?: Maybe<Scalars["String"]>;
  size: Scalars["Int"];
  thumbs: Array<Maybe<AppFileThumb>>;
  updatedAt?: Maybe<Scalars["Date"]>;
  uploadedBy?: Maybe<User>;
  uploadedById?: Maybe<Scalars["String"]>;
};

export type AppFileThumbsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type AppFileGroup = {
  __typename?: "AppFileGroup";
  _id: Scalars["ObjectId"];
  files: Array<Maybe<AppFile>>;
  filesIds: Array<Maybe<Scalars["ObjectId"]>>;
  name?: Maybe<Scalars["String"]>;
};

export type AppFileThumb = {
  __typename?: "AppFileThumb";
  downloadUrl: Scalars["String"];
  /** @deprecated Use 'type' instead, due to cache mismatch with Apollo */
  id: Scalars["String"];
  path: Scalars["String"];
  type: Scalars["String"];
};

export type Badge = {
  __typename?: "Badge";
  _id?: Maybe<Scalars["ObjectId"]>;
  description: Scalars["String"];
  icon?: Maybe<AppFile>;
  iconId?: Maybe<Scalars["ObjectId"]>;
  name: Scalars["String"];
};

export type BadgeInsertInput = {
  description: Scalars["String"];
  iconId?: InputMaybe<Scalars["ObjectId"]>;
  name: Scalars["String"];
};

export type BadgeUpdateInput = {
  description?: InputMaybe<Scalars["String"]>;
  iconId?: InputMaybe<Scalars["ObjectId"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type Book = {
  __typename?: "Book";
  _id?: Maybe<Scalars["ObjectId"]>;
  author: Scalars["String"];
  chapters: Array<Maybe<BookChapter>>;
  genres: Array<Maybe<Scalars["String"]>>;
  title: Scalars["String"];
};

export type BookChapter = {
  __typename?: "BookChapter";
  _id?: Maybe<Scalars["ObjectId"]>;
  book: Book;
  bookId: Scalars["ObjectId"];
  title: Scalars["String"];
};

export type BookChapterInsertInput = {
  bookId: Scalars["ObjectId"];
  title: Scalars["String"];
};

export type BookChapterUpdateInput = {
  bookId?: InputMaybe<Scalars["ObjectId"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type BookInsertInput = {
  author: Scalars["String"];
  genres: Array<InputMaybe<Scalars["String"]>>;
  title: Scalars["String"];
};

export type BookUpdateInput = {
  author?: InputMaybe<Scalars["String"]>;
  genres?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title?: InputMaybe<Scalars["String"]>;
};

export type ChangePasswordInput = {
  newPassword: Scalars["String"];
  oldPassword: Scalars["String"];
};

export type DocumentUpdateInput = {
  _id: Scalars["ObjectId"];
  modifier: Scalars["EJSON"];
};

export type EndUser = {
  __typename?: "EndUser";
  _id?: Maybe<Scalars["ObjectId"]>;
  badges: Array<Maybe<Badge>>;
  badgesIds: Array<Maybe<Scalars["ObjectId"]>>;
  books: Array<Maybe<EndUserBook>>;
  experience: Scalars["Int"];
  gold: Scalars["Int"];
  level: Scalars["Int"];
  owner: User;
  ownerId: Scalars["ObjectId"];
};

export type EndUserBook = {
  __typename?: "EndUserBook";
  _id?: Maybe<Scalars["ObjectId"]>;
  book: Book;
  bookId: Scalars["ObjectId"];
  chaptersTests: Array<Maybe<EndUserBookChaptersTest>>;
  endUser: EndUser;
  endUserId: Scalars["ObjectId"];
  progress: Scalars["Float"];
};

export type EndUserBookChapterDetails = {
  __typename?: "EndUserBookChapterDetails";
  _id: Scalars["ObjectId"];
  isPassed: Scalars["Boolean"];
  numberOfTries: Scalars["Int"];
  score?: Maybe<Scalars["Int"]>;
  title: Scalars["String"];
};

export type EndUserBookChaptersTest = {
  __typename?: "EndUserBookChaptersTest";
  chapterId: Scalars["ObjectId"];
  isPassed: Scalars["Boolean"];
  numberOfTries: Scalars["Int"];
  score: Scalars["Int"];
  testId: Scalars["ObjectId"];
};

export type EndUserBookChaptersTestInput = {
  chapterId: Scalars["ObjectId"];
  isPassed: Scalars["Boolean"];
  numberOfTries: Scalars["Int"];
  score: Scalars["Int"];
  testId: Scalars["ObjectId"];
};

export type EndUserBookDetails = {
  __typename?: "EndUserBookDetails";
  author: Scalars["String"];
  chapters: Array<EndUserBookChapterDetails>;
  progress: Scalars["Float"];
  title: Scalars["String"];
};

export type EndUserBookInsertInput = {
  bookId: Scalars["ObjectId"];
  chaptersTests: Array<InputMaybe<EndUserBookChaptersTestInput>>;
  endUserId: Scalars["ObjectId"];
};

export type EndUserBookTest = {
  __typename?: "EndUserBookTest";
  _id?: Maybe<Scalars["ObjectId"]>;
  questions: Array<Maybe<EndUserBookTestQuestion>>;
};

export type EndUserBookTestInput = {
  isPassed: Scalars["Boolean"];
  numberOfTries: Scalars["Int"];
  testId?: InputMaybe<Scalars["ObjectId"]>;
};

export type EndUserBookTestInsertInput = {
  questions: Array<InputMaybe<EndUserBookTestQuestionInput>>;
};

export type EndUserBookTestQuestion = {
  __typename?: "EndUserBookTestQuestion";
  choices?: Maybe<Array<Maybe<Scalars["String"]>>>;
  text: Scalars["String"];
  type: EndUserBookTestQuestionType;
};

export type EndUserBookTestQuestionInput = {
  choices?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  text: Scalars["String"];
  type: EndUserBookTestQuestionType;
};

export enum EndUserBookTestQuestionType {
  Boolean = "BOOLEAN",
  MultipleChoice = "MULTIPLE_CHOICE",
  Text = "TEXT",
}

export type EndUserBookTestUpdateInput = {
  questions?: InputMaybe<Array<InputMaybe<EndUserBookTestQuestionInput>>>;
};

export type EndUserBookUpdateInput = {
  bookId?: InputMaybe<Scalars["ObjectId"]>;
  chaptersTests?: InputMaybe<Array<InputMaybe<EndUserBookChaptersTestInput>>>;
  endUserId?: InputMaybe<Scalars["ObjectId"]>;
};

export type EndUserInsertInput = {
  badgesIds: Array<InputMaybe<Scalars["ObjectId"]>>;
  experience: Scalars["Int"];
  gold: Scalars["Int"];
  level: Scalars["Int"];
  ownerId: Scalars["ObjectId"];
};

export type EndUserUpdateInput = {
  badgesIds?: InputMaybe<Array<InputMaybe<Scalars["ObjectId"]>>>;
  experience?: InputMaybe<Scalars["Int"]>;
  gold?: InputMaybe<Scalars["Int"]>;
  level?: InputMaybe<Scalars["Int"]>;
  ownerId?: InputMaybe<Scalars["ObjectId"]>;
};

export type EndUsersAddBookToLibraryInput = {
  bookId: Scalars["ObjectId"];
};

export type EndUsersGenerateTestInput = {
  chapterId: Scalars["ObjectId"];
  endUserBookId: Scalars["ObjectId"];
};

export type EndUsersGetBookInput = {
  endUserBookId: Scalars["ObjectId"];
};

export type EndUsersGetChapterTestInput = {
  chapterId: Scalars["ObjectId"];
  endUserBookId: Scalars["ObjectId"];
};

export type EndUsersLoginInput = {
  password: Scalars["String"];
  usernameOrEmail: Scalars["String"];
};

export type EndUsersRegisterInput = {
  email: Scalars["String"];
  password: Scalars["String"];
  username: Scalars["String"];
};

export type EndUsersSearchBookInput = {
  title: Scalars["String"];
};

export type EndUsersSearchBookResponse = {
  __typename?: "EndUsersSearchBookResponse";
  author?: Maybe<Scalars["String"]>;
  bookId?: Maybe<Scalars["ObjectId"]>;
  exists: Scalars["Boolean"];
  title?: Maybe<Scalars["String"]>;
};

export type EndUsersSubmitTestInput = {
  answers: Array<InputMaybe<Scalars["String"]>>;
  chapterId: Scalars["ObjectId"];
  endUserBookId: Scalars["ObjectId"];
};

export type EndUsersSubmitTestResponse = {
  __typename?: "EndUsersSubmitTestResponse";
  answers: Array<EndUsersSubmitTestResponseAnswer>;
  attempts: Scalars["Int"];
  hasPassed: Scalars["Boolean"];
  score: Scalars["Int"];
};

export type EndUsersSubmitTestResponseAnswer = {
  __typename?: "EndUsersSubmitTestResponseAnswer";
  answer: Scalars["String"];
  correct: Scalars["Boolean"];
  explanation?: Maybe<Scalars["String"]>;
  question: Scalars["String"];
};

export type ForgotPasswordInput = {
  email: Scalars["String"];
};

export type LoginInput = {
  password: Scalars["String"];
  username: Scalars["String"];
};

export type LoginResponse = {
  __typename?: "LoginResponse";
  redirectUrl?: Maybe<Scalars["String"]>;
  token?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  AppFileGroupsDeleteOne?: Maybe<Scalars["Boolean"]>;
  AppFileGroupsInsertOne?: Maybe<AppFileGroup>;
  AppFileUpload?: Maybe<AppFile>;
  AppFileUploadToGroup?: Maybe<AppFile>;
  AppFilesDeleteOne?: Maybe<Scalars["Boolean"]>;
  BadgesDeleteOne?: Maybe<Scalars["Boolean"]>;
  BadgesInsertOne?: Maybe<Badge>;
  BadgesUpdateOne: Badge;
  BookChaptersDeleteOne?: Maybe<Scalars["Boolean"]>;
  BookChaptersInsertOne?: Maybe<BookChapter>;
  BookChaptersUpdateOne: BookChapter;
  BooksDeleteOne?: Maybe<Scalars["Boolean"]>;
  BooksInsertOne?: Maybe<Book>;
  BooksUpdateOne: Book;
  EndUserBookTestsDeleteOne?: Maybe<Scalars["Boolean"]>;
  EndUserBookTestsInsertOne?: Maybe<EndUserBookTest>;
  EndUserBookTestsUpdateOne: EndUserBookTest;
  EndUserBooksDeleteOne?: Maybe<Scalars["Boolean"]>;
  EndUserBooksInsertOne?: Maybe<EndUserBook>;
  EndUserBooksUpdateOne: EndUserBook;
  EndUsersAddBookToLibrary: Scalars["ObjectId"];
  EndUsersDeleteOne?: Maybe<Scalars["Boolean"]>;
  EndUsersGenerateTest?: Maybe<Scalars["Boolean"]>;
  EndUsersInsertOne?: Maybe<EndUser>;
  EndUsersLogin: Scalars["String"];
  EndUsersRegister?: Maybe<Scalars["Boolean"]>;
  EndUsersSearchBook: EndUsersSearchBookResponse;
  EndUsersSubmitTest: EndUsersSubmitTestResponse;
  EndUsersUpdateOne: EndUser;
  UsersDeleteOne?: Maybe<Scalars["Boolean"]>;
  UsersInsertOne?: Maybe<User>;
  UsersUpdateOne: User;
  changePassword?: Maybe<Scalars["Boolean"]>;
  forgotPassword?: Maybe<Scalars["Boolean"]>;
  login: LoginResponse;
  logout?: Maybe<Scalars["Boolean"]>;
  register: RegistrationResponse;
  /** This mutation is used to create a new token based on the existing one. Your previous token will no longer be usable. */
  reissueToken: Scalars["String"];
  requestLoginLink: RequestLoginLinkInputResponse;
  resetPassword: ResetPasswordResponse;
  verifyEmail: VerifyEmailResponse;
  verifyMagicCode: VerifyMagicLinkResponse;
};

export type MutationAppFileGroupsDeleteOneArgs = {
  _id: Scalars["ObjectId"];
};

export type MutationAppFileGroupsInsertOneArgs = {
  document: Scalars["EJSON"];
};

export type MutationAppFileUploadArgs = {
  context?: InputMaybe<Scalars["String"]>;
  upload: Scalars["Upload"];
};

export type MutationAppFileUploadToGroupArgs = {
  context?: InputMaybe<Scalars["String"]>;
  groupId: Scalars["ObjectId"];
  upload: Scalars["Upload"];
};

export type MutationAppFilesDeleteOneArgs = {
  _id: Scalars["ObjectId"];
};

export type MutationBadgesDeleteOneArgs = {
  _id: Scalars["ObjectId"];
};

export type MutationBadgesInsertOneArgs = {
  document: BadgeInsertInput;
};

export type MutationBadgesUpdateOneArgs = {
  _id: Scalars["ObjectId"];
  document: BadgeUpdateInput;
};

export type MutationBookChaptersDeleteOneArgs = {
  _id: Scalars["ObjectId"];
};

export type MutationBookChaptersInsertOneArgs = {
  document: BookChapterInsertInput;
};

export type MutationBookChaptersUpdateOneArgs = {
  _id: Scalars["ObjectId"];
  document: BookChapterUpdateInput;
};

export type MutationBooksDeleteOneArgs = {
  _id: Scalars["ObjectId"];
};

export type MutationBooksInsertOneArgs = {
  document: BookInsertInput;
};

export type MutationBooksUpdateOneArgs = {
  _id: Scalars["ObjectId"];
  document: BookUpdateInput;
};

export type MutationEndUserBookTestsDeleteOneArgs = {
  _id: Scalars["ObjectId"];
};

export type MutationEndUserBookTestsInsertOneArgs = {
  document: EndUserBookTestInsertInput;
};

export type MutationEndUserBookTestsUpdateOneArgs = {
  _id: Scalars["ObjectId"];
  document: EndUserBookTestUpdateInput;
};

export type MutationEndUserBooksDeleteOneArgs = {
  _id: Scalars["ObjectId"];
};

export type MutationEndUserBooksInsertOneArgs = {
  document: EndUserBookInsertInput;
};

export type MutationEndUserBooksUpdateOneArgs = {
  _id: Scalars["ObjectId"];
  document: EndUserBookUpdateInput;
};

export type MutationEndUsersAddBookToLibraryArgs = {
  input: EndUsersAddBookToLibraryInput;
};

export type MutationEndUsersDeleteOneArgs = {
  _id: Scalars["ObjectId"];
};

export type MutationEndUsersGenerateTestArgs = {
  input: EndUsersGenerateTestInput;
};

export type MutationEndUsersInsertOneArgs = {
  document: EndUserInsertInput;
};

export type MutationEndUsersLoginArgs = {
  input: EndUsersLoginInput;
};

export type MutationEndUsersRegisterArgs = {
  input: EndUsersRegisterInput;
};

export type MutationEndUsersSearchBookArgs = {
  input: EndUsersSearchBookInput;
};

export type MutationEndUsersSubmitTestArgs = {
  input: EndUsersSubmitTestInput;
};

export type MutationEndUsersUpdateOneArgs = {
  _id: Scalars["ObjectId"];
  document: EndUserUpdateInput;
};

export type MutationUsersDeleteOneArgs = {
  _id: Scalars["ObjectId"];
};

export type MutationUsersInsertOneArgs = {
  document: UserInsertInput;
};

export type MutationUsersUpdateOneArgs = {
  _id: Scalars["ObjectId"];
  document: UserUpdateInput;
};

export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};

export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationRegisterArgs = {
  input: RegistrationInput;
};

export type MutationReissueTokenArgs = {
  token: Scalars["String"];
};

export type MutationRequestLoginLinkArgs = {
  input: RequestLoginLinkInput;
};

export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};

export type MutationVerifyEmailArgs = {
  input: VerifyEmailInput;
};

export type MutationVerifyMagicCodeArgs = {
  input: VerifyMagicLinkInput;
};

export type Query = {
  __typename?: "Query";
  AppFileGroupsFind?: Maybe<Array<Maybe<AppFileGroup>>>;
  AppFileGroupsFindOne?: Maybe<AppFileGroup>;
  AppFilesFind?: Maybe<Array<Maybe<AppFile>>>;
  AppFilesFindOne?: Maybe<AppFile>;
  BadgesCount: Scalars["Int"];
  BadgesFind: Array<Maybe<Badge>>;
  BadgesFindOne?: Maybe<Badge>;
  BookChaptersCount: Scalars["Int"];
  BookChaptersFind: Array<Maybe<BookChapter>>;
  BookChaptersFindOne?: Maybe<BookChapter>;
  BooksCount: Scalars["Int"];
  BooksFind: Array<Maybe<Book>>;
  BooksFindOne?: Maybe<Book>;
  EndUserBookTestsCount: Scalars["Int"];
  EndUserBookTestsFind: Array<Maybe<EndUserBookTest>>;
  EndUserBookTestsFindOne?: Maybe<EndUserBookTest>;
  EndUserBooksCount: Scalars["Int"];
  EndUserBooksFind: Array<Maybe<EndUserBook>>;
  EndUserBooksFindOne?: Maybe<EndUserBook>;
  EndUsersCount: Scalars["Int"];
  EndUsersFind: Array<Maybe<EndUser>>;
  EndUsersFindOne?: Maybe<EndUser>;
  EndUsersGetBook: EndUserBookDetails;
  EndUsersGetBooks: Array<Maybe<EndUserBook>>;
  EndUsersGetChapterTest: Array<Maybe<EndUserBookTestQuestion>>;
  UsersCount: Scalars["Int"];
  UsersFind: Array<Maybe<User>>;
  UsersFindOne?: Maybe<User>;
  framework?: Maybe<Scalars["String"]>;
  me: User;
};

export type QueryAppFileGroupsFindArgs = {
  query: QueryInput;
};

export type QueryAppFileGroupsFindOneArgs = {
  query: QueryInput;
};

export type QueryAppFilesFindArgs = {
  query: QueryInput;
};

export type QueryAppFilesFindOneArgs = {
  query: QueryInput;
};

export type QueryBadgesCountArgs = {
  query?: InputMaybe<QueryInput>;
};

export type QueryBadgesFindArgs = {
  query?: InputMaybe<QueryInput>;
};

export type QueryBadgesFindOneArgs = {
  query?: InputMaybe<QueryInput>;
};

export type QueryBookChaptersCountArgs = {
  query?: InputMaybe<QueryInput>;
};

export type QueryBookChaptersFindArgs = {
  query?: InputMaybe<QueryInput>;
};

export type QueryBookChaptersFindOneArgs = {
  query?: InputMaybe<QueryInput>;
};

export type QueryBooksCountArgs = {
  query?: InputMaybe<QueryInput>;
};

export type QueryBooksFindArgs = {
  query?: InputMaybe<QueryInput>;
};

export type QueryBooksFindOneArgs = {
  query?: InputMaybe<QueryInput>;
};

export type QueryEndUserBookTestsCountArgs = {
  query?: InputMaybe<QueryInput>;
};

export type QueryEndUserBookTestsFindArgs = {
  query?: InputMaybe<QueryInput>;
};

export type QueryEndUserBookTestsFindOneArgs = {
  query?: InputMaybe<QueryInput>;
};

export type QueryEndUserBooksCountArgs = {
  query?: InputMaybe<QueryInput>;
};

export type QueryEndUserBooksFindArgs = {
  query?: InputMaybe<QueryInput>;
};

export type QueryEndUserBooksFindOneArgs = {
  query?: InputMaybe<QueryInput>;
};

export type QueryEndUsersCountArgs = {
  query?: InputMaybe<QueryInput>;
};

export type QueryEndUsersFindArgs = {
  query?: InputMaybe<QueryInput>;
};

export type QueryEndUsersFindOneArgs = {
  query?: InputMaybe<QueryInput>;
};

export type QueryEndUsersGetBookArgs = {
  input: EndUsersGetBookInput;
};

export type QueryEndUsersGetChapterTestArgs = {
  input: EndUsersGetChapterTestInput;
};

export type QueryUsersCountArgs = {
  query?: InputMaybe<QueryInput>;
};

export type QueryUsersFindArgs = {
  query?: InputMaybe<QueryInput>;
};

export type QueryUsersFindOneArgs = {
  query?: InputMaybe<QueryInput>;
};

export type QueryInput = {
  filters?: InputMaybe<Scalars["EJSON"]>;
  options?: InputMaybe<QueryOptionsInput>;
};

export type QueryOptionsInput = {
  limit?: InputMaybe<Scalars["Int"]>;
  /** This is the Nova body that will get merged deeply with your request body. Useful for passing arguments. */
  sideBody?: InputMaybe<Scalars["EJSON"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["JSON"]>;
};

export type RegistrationInput = {
  email: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  password: Scalars["String"];
};

export type RegistrationResponse = {
  __typename?: "RegistrationResponse";
  /** Please not that if the user is required to validate his email for logging in, token will be null */
  token?: Maybe<Scalars["String"]>;
};

export type RequestLoginLinkInput = {
  type?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["String"]>;
  username?: InputMaybe<Scalars["String"]>;
};

export type RequestLoginLinkInputResponse = {
  __typename?: "RequestLoginLinkInputResponse";
  confirmationFormat?: Maybe<Scalars["String"]>;
  magicCodeSent: Scalars["Boolean"];
  method?: Maybe<Scalars["String"]>;
  userId: Scalars["String"];
};

export type ResetPasswordInput = {
  newPassword: Scalars["String"];
  token: Scalars["String"];
  username: Scalars["String"];
};

export type ResetPasswordResponse = {
  __typename?: "ResetPasswordResponse";
  token: Scalars["String"];
};

export type Subscription = {
  __typename?: "Subscription";
  BadgesSubscription?: Maybe<SubscriptionEvent>;
  BadgesSubscriptionCount?: Maybe<SubscriptionCountEvent>;
  BookChaptersSubscription?: Maybe<SubscriptionEvent>;
  BookChaptersSubscriptionCount?: Maybe<SubscriptionCountEvent>;
  BooksSubscription?: Maybe<SubscriptionEvent>;
  BooksSubscriptionCount?: Maybe<SubscriptionCountEvent>;
  EndUserBookTestsSubscription?: Maybe<SubscriptionEvent>;
  EndUserBookTestsSubscriptionCount?: Maybe<SubscriptionCountEvent>;
  EndUserBooksSubscription?: Maybe<SubscriptionEvent>;
  EndUserBooksSubscriptionCount?: Maybe<SubscriptionCountEvent>;
  EndUsersSubscription?: Maybe<SubscriptionEvent>;
  EndUsersSubscriptionCount?: Maybe<SubscriptionCountEvent>;
  UsersSubscription?: Maybe<SubscriptionEvent>;
  UsersSubscriptionCount?: Maybe<SubscriptionCountEvent>;
};

export type SubscriptionBadgesSubscriptionArgs = {
  body?: InputMaybe<Scalars["EJSON"]>;
};

export type SubscriptionBadgesSubscriptionCountArgs = {
  filters?: InputMaybe<Scalars["EJSON"]>;
};

export type SubscriptionBookChaptersSubscriptionArgs = {
  body?: InputMaybe<Scalars["EJSON"]>;
};

export type SubscriptionBookChaptersSubscriptionCountArgs = {
  filters?: InputMaybe<Scalars["EJSON"]>;
};

export type SubscriptionBooksSubscriptionArgs = {
  body?: InputMaybe<Scalars["EJSON"]>;
};

export type SubscriptionBooksSubscriptionCountArgs = {
  filters?: InputMaybe<Scalars["EJSON"]>;
};

export type SubscriptionEndUserBookTestsSubscriptionArgs = {
  body?: InputMaybe<Scalars["EJSON"]>;
};

export type SubscriptionEndUserBookTestsSubscriptionCountArgs = {
  filters?: InputMaybe<Scalars["EJSON"]>;
};

export type SubscriptionEndUserBooksSubscriptionArgs = {
  body?: InputMaybe<Scalars["EJSON"]>;
};

export type SubscriptionEndUserBooksSubscriptionCountArgs = {
  filters?: InputMaybe<Scalars["EJSON"]>;
};

export type SubscriptionEndUsersSubscriptionArgs = {
  body?: InputMaybe<Scalars["EJSON"]>;
};

export type SubscriptionEndUsersSubscriptionCountArgs = {
  filters?: InputMaybe<Scalars["EJSON"]>;
};

export type SubscriptionUsersSubscriptionArgs = {
  body?: InputMaybe<Scalars["EJSON"]>;
};

export type SubscriptionUsersSubscriptionCountArgs = {
  filters?: InputMaybe<Scalars["EJSON"]>;
};

export type SubscriptionCountEvent = {
  __typename?: "SubscriptionCountEvent";
  count?: Maybe<Scalars["Int"]>;
};

export type SubscriptionEvent = {
  __typename?: "SubscriptionEvent";
  document?: Maybe<Scalars["EJSON"]>;
  event: SubscriptionEventType;
};

export enum SubscriptionEventType {
  Added = "added",
  Changed = "changed",
  Ready = "ready",
  Removed = "removed",
}

export type User = {
  __typename?: "User";
  _id?: Maybe<Scalars["ObjectId"]>;
  /** Represents the date when this object was created */
  createdAt: Scalars["Date"];
  /** Represents the user who has created this object */
  createdBy?: Maybe<User>;
  /** Represents the user's id who has created this object */
  createdById?: Maybe<Scalars["ObjectId"]>;
  email: Scalars["String"];
  endUser: EndUser;
  isEnabled: Scalars["Boolean"];
  roles: Array<Maybe<UserRole>>;
  /** Represents the last time when the object was updated */
  updatedAt: Scalars["Date"];
  /** Represents the user who has made the latest update on this object */
  updatedBy?: Maybe<User>;
  /** Represents the user's id who has made the latest update on this object */
  updatedById?: Maybe<Scalars["ObjectId"]>;
  username: Scalars["String"];
};

export type UserInsertInput = {
  isEnabled: Scalars["Boolean"];
  roles: Array<InputMaybe<UserRole>>;
};

export enum UserRole {
  Admin = "ADMIN",
  EndUser = "END_USER",
}

export type UserUpdateInput = {
  isEnabled?: InputMaybe<Scalars["Boolean"]>;
  roles?: InputMaybe<Array<InputMaybe<UserRole>>>;
};

export type VerifyEmailInput = {
  token: Scalars["String"];
  username?: InputMaybe<Scalars["String"]>;
};

export type VerifyEmailResponse = {
  __typename?: "VerifyEmailResponse";
  token: Scalars["String"];
};

export type VerifyMagicLinkInput = {
  magicCode: Scalars["String"];
  userId: Scalars["String"];
};

export type VerifyMagicLinkResponse = {
  __typename?: "VerifyMagicLinkResponse";
  redirectUrl?: Maybe<Scalars["String"]>;
  token?: Maybe<Scalars["String"]>;
};

export type EndUsersAddBookToLibraryMutationVariables = Exact<{
  input: EndUsersAddBookToLibraryInput;
}>;

export type EndUsersAddBookToLibraryMutation = {
  __typename?: "Mutation";
  EndUsersAddBookToLibrary: any;
};

export type EndUsersGenerateTestMutationVariables = Exact<{
  input: EndUsersGenerateTestInput;
}>;

export type EndUsersGenerateTestMutation = {
  __typename?: "Mutation";
  EndUsersGenerateTest?: boolean | null;
};

export type EndUsersLoginMutationVariables = Exact<{
  input: EndUsersLoginInput;
}>;

export type EndUsersLoginMutation = {
  __typename?: "Mutation";
  EndUsersLogin: string;
};

export type EndUsersRegisterMutationVariables = Exact<{
  input: EndUsersRegisterInput;
}>;

export type EndUsersRegisterMutation = {
  __typename?: "Mutation";
  EndUsersRegister?: boolean | null;
};

export type EndUsersSearchBookMutationVariables = Exact<{
  input: EndUsersSearchBookInput;
}>;

export type EndUsersSearchBookMutation = {
  __typename?: "Mutation";
  EndUsersSearchBook: {
    __typename?: "EndUsersSearchBookResponse";
    bookId?: any | null;
    exists: boolean;
    title?: string | null;
    author?: string | null;
  };
};

export type EndUsersSubmitTestMutationVariables = Exact<{
  input: EndUsersSubmitTestInput;
}>;

export type EndUsersSubmitTestMutation = {
  __typename?: "Mutation";
  EndUsersSubmitTest: {
    __typename?: "EndUsersSubmitTestResponse";
    hasPassed: boolean;
    score: number;
    attempts: number;
    answers: Array<{
      __typename?: "EndUsersSubmitTestResponseAnswer";
      question: string;
      answer: string;
      correct: boolean;
      explanation?: string | null;
    }>;
  };
};

export type EndUsersGetBookQueryVariables = Exact<{
  input: EndUsersGetBookInput;
}>;

export type EndUsersGetBookQuery = {
  __typename?: "Query";
  EndUsersGetBook: {
    __typename?: "EndUserBookDetails";
    progress: number;
    title: string;
    author: string;
    chapters: Array<{
      __typename?: "EndUserBookChapterDetails";
      _id: any;
      title: string;
      isPassed: boolean;
      score?: number | null;
      numberOfTries: number;
    }>;
  };
};

export type EndUsersGetBooksQueryVariables = Exact<{ [key: string]: never }>;

export type EndUsersGetBooksQuery = {
  __typename?: "Query";
  EndUsersGetBooks: Array<{
    __typename?: "EndUserBook";
    _id?: any | null;
    progress: number;
    book: { __typename?: "Book"; author: string; title: string };
  } | null>;
};

export type EndUsersGetChapterTestQueryVariables = Exact<{
  input: EndUsersGetChapterTestInput;
}>;

export type EndUsersGetChapterTestQuery = {
  __typename?: "Query";
  EndUsersGetChapterTest: Array<{
    __typename?: "EndUserBookTestQuestion";
    text: string;
    type: EndUserBookTestQuestionType;
    choices?: Array<string | null> | null;
  } | null>;
};

export const EndUsersAddBookToLibraryDocument = gql`
  mutation EndUsersAddBookToLibrary($input: EndUsersAddBookToLibraryInput!) {
    EndUsersAddBookToLibrary(input: $input)
  }
`;
export type EndUsersAddBookToLibraryMutationFn = Apollo.MutationFunction<
  EndUsersAddBookToLibraryMutation,
  EndUsersAddBookToLibraryMutationVariables
>;

/**
 * __useEndUsersAddBookToLibraryMutation__
 *
 * To run a mutation, you first call `useEndUsersAddBookToLibraryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEndUsersAddBookToLibraryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [endUsersAddBookToLibraryMutation, { data, loading, error }] = useEndUsersAddBookToLibraryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEndUsersAddBookToLibraryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EndUsersAddBookToLibraryMutation,
    EndUsersAddBookToLibraryMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    EndUsersAddBookToLibraryMutation,
    EndUsersAddBookToLibraryMutationVariables
  >(EndUsersAddBookToLibraryDocument, options);
}
export type EndUsersAddBookToLibraryMutationHookResult = ReturnType<
  typeof useEndUsersAddBookToLibraryMutation
>;
export type EndUsersAddBookToLibraryMutationResult =
  Apollo.MutationResult<EndUsersAddBookToLibraryMutation>;
export type EndUsersAddBookToLibraryMutationOptions =
  Apollo.BaseMutationOptions<
    EndUsersAddBookToLibraryMutation,
    EndUsersAddBookToLibraryMutationVariables
  >;
export const EndUsersGenerateTestDocument = gql`
  mutation EndUsersGenerateTest($input: EndUsersGenerateTestInput!) {
    EndUsersGenerateTest(input: $input)
  }
`;
export type EndUsersGenerateTestMutationFn = Apollo.MutationFunction<
  EndUsersGenerateTestMutation,
  EndUsersGenerateTestMutationVariables
>;

/**
 * __useEndUsersGenerateTestMutation__
 *
 * To run a mutation, you first call `useEndUsersGenerateTestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEndUsersGenerateTestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [endUsersGenerateTestMutation, { data, loading, error }] = useEndUsersGenerateTestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEndUsersGenerateTestMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EndUsersGenerateTestMutation,
    EndUsersGenerateTestMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    EndUsersGenerateTestMutation,
    EndUsersGenerateTestMutationVariables
  >(EndUsersGenerateTestDocument, options);
}
export type EndUsersGenerateTestMutationHookResult = ReturnType<
  typeof useEndUsersGenerateTestMutation
>;
export type EndUsersGenerateTestMutationResult =
  Apollo.MutationResult<EndUsersGenerateTestMutation>;
export type EndUsersGenerateTestMutationOptions = Apollo.BaseMutationOptions<
  EndUsersGenerateTestMutation,
  EndUsersGenerateTestMutationVariables
>;
export const EndUsersLoginDocument = gql`
  mutation EndUsersLogin($input: EndUsersLoginInput!) {
    EndUsersLogin(input: $input)
  }
`;
export type EndUsersLoginMutationFn = Apollo.MutationFunction<
  EndUsersLoginMutation,
  EndUsersLoginMutationVariables
>;

/**
 * __useEndUsersLoginMutation__
 *
 * To run a mutation, you first call `useEndUsersLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEndUsersLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [endUsersLoginMutation, { data, loading, error }] = useEndUsersLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEndUsersLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EndUsersLoginMutation,
    EndUsersLoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    EndUsersLoginMutation,
    EndUsersLoginMutationVariables
  >(EndUsersLoginDocument, options);
}
export type EndUsersLoginMutationHookResult = ReturnType<
  typeof useEndUsersLoginMutation
>;
export type EndUsersLoginMutationResult =
  Apollo.MutationResult<EndUsersLoginMutation>;
export type EndUsersLoginMutationOptions = Apollo.BaseMutationOptions<
  EndUsersLoginMutation,
  EndUsersLoginMutationVariables
>;
export const EndUsersRegisterDocument = gql`
  mutation EndUsersRegister($input: EndUsersRegisterInput!) {
    EndUsersRegister(input: $input)
  }
`;
export type EndUsersRegisterMutationFn = Apollo.MutationFunction<
  EndUsersRegisterMutation,
  EndUsersRegisterMutationVariables
>;

/**
 * __useEndUsersRegisterMutation__
 *
 * To run a mutation, you first call `useEndUsersRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEndUsersRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [endUsersRegisterMutation, { data, loading, error }] = useEndUsersRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEndUsersRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EndUsersRegisterMutation,
    EndUsersRegisterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    EndUsersRegisterMutation,
    EndUsersRegisterMutationVariables
  >(EndUsersRegisterDocument, options);
}
export type EndUsersRegisterMutationHookResult = ReturnType<
  typeof useEndUsersRegisterMutation
>;
export type EndUsersRegisterMutationResult =
  Apollo.MutationResult<EndUsersRegisterMutation>;
export type EndUsersRegisterMutationOptions = Apollo.BaseMutationOptions<
  EndUsersRegisterMutation,
  EndUsersRegisterMutationVariables
>;
export const EndUsersSearchBookDocument = gql`
  mutation EndUsersSearchBook($input: EndUsersSearchBookInput!) {
    EndUsersSearchBook(input: $input) {
      bookId
      exists
      title
      author
    }
  }
`;
export type EndUsersSearchBookMutationFn = Apollo.MutationFunction<
  EndUsersSearchBookMutation,
  EndUsersSearchBookMutationVariables
>;

/**
 * __useEndUsersSearchBookMutation__
 *
 * To run a mutation, you first call `useEndUsersSearchBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEndUsersSearchBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [endUsersSearchBookMutation, { data, loading, error }] = useEndUsersSearchBookMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEndUsersSearchBookMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EndUsersSearchBookMutation,
    EndUsersSearchBookMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    EndUsersSearchBookMutation,
    EndUsersSearchBookMutationVariables
  >(EndUsersSearchBookDocument, options);
}
export type EndUsersSearchBookMutationHookResult = ReturnType<
  typeof useEndUsersSearchBookMutation
>;
export type EndUsersSearchBookMutationResult =
  Apollo.MutationResult<EndUsersSearchBookMutation>;
export type EndUsersSearchBookMutationOptions = Apollo.BaseMutationOptions<
  EndUsersSearchBookMutation,
  EndUsersSearchBookMutationVariables
>;
export const EndUsersSubmitTestDocument = gql`
  mutation EndUsersSubmitTest($input: EndUsersSubmitTestInput!) {
    EndUsersSubmitTest(input: $input) {
      hasPassed
      score
      attempts
      answers {
        question
        answer
        correct
        explanation
      }
    }
  }
`;
export type EndUsersSubmitTestMutationFn = Apollo.MutationFunction<
  EndUsersSubmitTestMutation,
  EndUsersSubmitTestMutationVariables
>;

/**
 * __useEndUsersSubmitTestMutation__
 *
 * To run a mutation, you first call `useEndUsersSubmitTestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEndUsersSubmitTestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [endUsersSubmitTestMutation, { data, loading, error }] = useEndUsersSubmitTestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEndUsersSubmitTestMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EndUsersSubmitTestMutation,
    EndUsersSubmitTestMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    EndUsersSubmitTestMutation,
    EndUsersSubmitTestMutationVariables
  >(EndUsersSubmitTestDocument, options);
}
export type EndUsersSubmitTestMutationHookResult = ReturnType<
  typeof useEndUsersSubmitTestMutation
>;
export type EndUsersSubmitTestMutationResult =
  Apollo.MutationResult<EndUsersSubmitTestMutation>;
export type EndUsersSubmitTestMutationOptions = Apollo.BaseMutationOptions<
  EndUsersSubmitTestMutation,
  EndUsersSubmitTestMutationVariables
>;
export const EndUsersGetBookDocument = gql`
  query EndUsersGetBook($input: EndUsersGetBookInput!) {
    EndUsersGetBook(input: $input) {
      progress
      title
      author
      chapters {
        _id
        title
        isPassed
        score
        numberOfTries
      }
    }
  }
`;

/**
 * __useEndUsersGetBookQuery__
 *
 * To run a query within a React component, call `useEndUsersGetBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useEndUsersGetBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEndUsersGetBookQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEndUsersGetBookQuery(
  baseOptions: Apollo.QueryHookOptions<
    EndUsersGetBookQuery,
    EndUsersGetBookQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<EndUsersGetBookQuery, EndUsersGetBookQueryVariables>(
    EndUsersGetBookDocument,
    options
  );
}
export function useEndUsersGetBookLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    EndUsersGetBookQuery,
    EndUsersGetBookQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    EndUsersGetBookQuery,
    EndUsersGetBookQueryVariables
  >(EndUsersGetBookDocument, options);
}
export type EndUsersGetBookQueryHookResult = ReturnType<
  typeof useEndUsersGetBookQuery
>;
export type EndUsersGetBookLazyQueryHookResult = ReturnType<
  typeof useEndUsersGetBookLazyQuery
>;
export type EndUsersGetBookQueryResult = Apollo.QueryResult<
  EndUsersGetBookQuery,
  EndUsersGetBookQueryVariables
>;
export const EndUsersGetBooksDocument = gql`
  query EndUsersGetBooks {
    EndUsersGetBooks {
      _id
      progress
      book {
        author
        title
      }
    }
  }
`;

/**
 * __useEndUsersGetBooksQuery__
 *
 * To run a query within a React component, call `useEndUsersGetBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useEndUsersGetBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEndUsersGetBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useEndUsersGetBooksQuery(
  baseOptions?: Apollo.QueryHookOptions<
    EndUsersGetBooksQuery,
    EndUsersGetBooksQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<EndUsersGetBooksQuery, EndUsersGetBooksQueryVariables>(
    EndUsersGetBooksDocument,
    options
  );
}
export function useEndUsersGetBooksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    EndUsersGetBooksQuery,
    EndUsersGetBooksQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    EndUsersGetBooksQuery,
    EndUsersGetBooksQueryVariables
  >(EndUsersGetBooksDocument, options);
}
export type EndUsersGetBooksQueryHookResult = ReturnType<
  typeof useEndUsersGetBooksQuery
>;
export type EndUsersGetBooksLazyQueryHookResult = ReturnType<
  typeof useEndUsersGetBooksLazyQuery
>;
export type EndUsersGetBooksQueryResult = Apollo.QueryResult<
  EndUsersGetBooksQuery,
  EndUsersGetBooksQueryVariables
>;
export const EndUsersGetChapterTestDocument = gql`
  query EndUsersGetChapterTest($input: EndUsersGetChapterTestInput!) {
    EndUsersGetChapterTest(input: $input) {
      text
      type
      choices
    }
  }
`;

/**
 * __useEndUsersGetChapterTestQuery__
 *
 * To run a query within a React component, call `useEndUsersGetChapterTestQuery` and pass it any options that fit your needs.
 * When your component renders, `useEndUsersGetChapterTestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEndUsersGetChapterTestQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEndUsersGetChapterTestQuery(
  baseOptions: Apollo.QueryHookOptions<
    EndUsersGetChapterTestQuery,
    EndUsersGetChapterTestQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    EndUsersGetChapterTestQuery,
    EndUsersGetChapterTestQueryVariables
  >(EndUsersGetChapterTestDocument, options);
}
export function useEndUsersGetChapterTestLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    EndUsersGetChapterTestQuery,
    EndUsersGetChapterTestQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    EndUsersGetChapterTestQuery,
    EndUsersGetChapterTestQueryVariables
  >(EndUsersGetChapterTestDocument, options);
}
export type EndUsersGetChapterTestQueryHookResult = ReturnType<
  typeof useEndUsersGetChapterTestQuery
>;
export type EndUsersGetChapterTestLazyQueryHookResult = ReturnType<
  typeof useEndUsersGetChapterTestLazyQuery
>;
export type EndUsersGetChapterTestQueryResult = Apollo.QueryResult<
  EndUsersGetChapterTestQuery,
  EndUsersGetChapterTestQueryVariables
>;
