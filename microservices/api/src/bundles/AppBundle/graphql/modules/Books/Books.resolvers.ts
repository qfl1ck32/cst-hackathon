import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";
import { BookInsertInput, BookUpdateInput } from "../../../services/inputs";
import { BooksCollection } from "../../../collections/Books/Books.collection";

true;
export default {
  Query: [
    [],
    {
      BooksFindOne: [X.ToNovaOne(BooksCollection)],
      BooksFind: [X.ToNova(BooksCollection)],
      BooksCount: [X.ToCollectionCount(BooksCollection)],
    },
  ],
  Mutation: [
    [],
    {
      BooksInsertOne: [
        X.ToModel(BookInsertInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.ToDocumentInsert(BooksCollection),
        X.ToNovaByResultID(BooksCollection),
      ],
      BooksUpdateOne: [
        X.ToModel(BookUpdateInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.CheckDocumentExists(BooksCollection),
        X.ToDocumentUpdateByID(BooksCollection, null, ({ document }) => ({
          $set: document,
        })),
        X.ToNovaByResultID(BooksCollection),
      ],
      BooksDeleteOne: [
        X.CheckDocumentExists(BooksCollection),
        X.ToDocumentDeleteByID(BooksCollection),
      ],
    },
  ],
  Subscription: {
    BooksSubscription: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscription(BooksCollection)],
    },
    BooksSubscriptionCount: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscriptionCount(BooksCollection)],
    },
  },
} as IResolverMap;
