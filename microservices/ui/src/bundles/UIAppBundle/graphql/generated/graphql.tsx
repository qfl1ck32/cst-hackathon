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
  chapters: Array<Maybe<Scalars["String"]>>;
  genres: Array<Maybe<Scalars["String"]>>;
  title: Scalars["String"];
};

export type BookInsertInput = {
  author: Scalars["String"];
  chapters: Array<InputMaybe<Scalars["String"]>>;
  genres: Array<InputMaybe<Scalars["String"]>>;
  title: Scalars["String"];
};

export type BookUpdateInput = {
  author?: InputMaybe<Scalars["String"]>;
  chapters?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
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
  endUser: EndUser;
  endUserId: Scalars["ObjectId"];
  progress: Scalars["Float"];
  tests: Array<Maybe<EndUserBookTest>>;
};

export type EndUserBookInsertInput = {
  bookId: Scalars["ObjectId"];
  endUserId: Scalars["ObjectId"];
  progress: Scalars["Float"];
  tests: Array<InputMaybe<EndUserBookTestInput>>;
};

export type EndUserBookTest = {
  __typename?: "EndUserBookTest";
  chapter: Scalars["Int"];
  isPassed: Scalars["Boolean"];
  numberOfTries: Scalars["Int"];
};

export type EndUserBookTestInput = {
  chapter: Scalars["Int"];
  isPassed: Scalars["Boolean"];
  numberOfTries: Scalars["Int"];
};

export type EndUserBookUpdateInput = {
  bookId?: InputMaybe<Scalars["ObjectId"]>;
  endUserId?: InputMaybe<Scalars["ObjectId"]>;
  progress?: InputMaybe<Scalars["Float"]>;
  tests?: InputMaybe<Array<InputMaybe<EndUserBookTestInput>>>;
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
  BooksDeleteOne?: Maybe<Scalars["Boolean"]>;
  BooksInsertOne?: Maybe<Book>;
  BooksUpdateOne: Book;
  EndUserBooksDeleteOne?: Maybe<Scalars["Boolean"]>;
  EndUserBooksInsertOne?: Maybe<EndUserBook>;
  EndUserBooksUpdateOne: EndUserBook;
  EndUsersAddBookToLibrary: Scalars["ObjectId"];
  EndUsersDeleteOne?: Maybe<Scalars["Boolean"]>;
  EndUsersInsertOne?: Maybe<EndUser>;
  EndUsersLogin: Scalars["String"];
  EndUsersRegister?: Maybe<Scalars["Boolean"]>;
  EndUsersSearchBook: EndUsersSearchBookResponse;
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
  BooksCount: Scalars["Int"];
  BooksFind: Array<Maybe<Book>>;
  BooksFindOne?: Maybe<Book>;
  EndUserBooksCount: Scalars["Int"];
  EndUserBooksFind: Array<Maybe<EndUserBook>>;
  EndUserBooksFindOne?: Maybe<EndUserBook>;
  EndUsersCount: Scalars["Int"];
  EndUsersFind: Array<Maybe<EndUser>>;
  EndUsersFindOne?: Maybe<EndUser>;
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

export type QueryBooksCountArgs = {
  query?: InputMaybe<QueryInput>;
};

export type QueryBooksFindArgs = {
  query?: InputMaybe<QueryInput>;
};

export type QueryBooksFindOneArgs = {
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
  BooksSubscription?: Maybe<SubscriptionEvent>;
  BooksSubscriptionCount?: Maybe<SubscriptionCountEvent>;
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

export type SubscriptionBooksSubscriptionArgs = {
  body?: InputMaybe<Scalars["EJSON"]>;
};

export type SubscriptionBooksSubscriptionCountArgs = {
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