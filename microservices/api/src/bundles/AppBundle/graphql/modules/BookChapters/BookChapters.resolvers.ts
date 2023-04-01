import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";
import {
  BookChapterInsertInput,
  BookChapterUpdateInput,
} from "../../../services/inputs";
import { BookChaptersCollection } from "../../../collections/BookChapters/BookChapters.collection";

true;
export default {
  Query: [
    [],
    {
      BookChaptersFindOne: [X.ToNovaOne(BookChaptersCollection)],
      BookChaptersFind: [X.ToNova(BookChaptersCollection)],
      BookChaptersCount: [X.ToCollectionCount(BookChaptersCollection)],
    },
  ],
  Mutation: [
    [],
    {
      BookChaptersInsertOne: [
        X.ToModel(BookChapterInsertInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.ToDocumentInsert(BookChaptersCollection),
        X.ToNovaByResultID(BookChaptersCollection),
      ],
      BookChaptersUpdateOne: [
        X.ToModel(BookChapterUpdateInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.CheckDocumentExists(BookChaptersCollection),
        X.ToDocumentUpdateByID(
          BookChaptersCollection,
          null,
          ({ document }) => ({
            $set: document,
          })
        ),
        X.ToNovaByResultID(BookChaptersCollection),
      ],
      BookChaptersDeleteOne: [
        X.CheckDocumentExists(BookChaptersCollection),
        X.ToDocumentDeleteByID(BookChaptersCollection),
      ],
    },
  ],
  Subscription: {
    BookChaptersSubscription: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscription(BookChaptersCollection)],
    },
    BookChaptersSubscriptionCount: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscriptionCount(BookChaptersCollection)],
    },
  },
} as IResolverMap;
