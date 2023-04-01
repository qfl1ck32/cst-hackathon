import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";
import {
  EndUserBookInsertInput,
  EndUserBookUpdateInput,
} from "../../../services/inputs";
import { EndUserBooksCollection } from "../../../collections/EndUserBooks/EndUserBooks.collection";

true;
export default {
  Query: [
    [],
    {
      EndUserBooksFindOne: [X.ToNovaOne(EndUserBooksCollection)],
      EndUserBooksFind: [X.ToNova(EndUserBooksCollection)],
      EndUserBooksCount: [X.ToCollectionCount(EndUserBooksCollection)],
    },
  ],
  Mutation: [
    [],
    {
      EndUserBooksInsertOne: [
        X.ToModel(EndUserBookInsertInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.ToDocumentInsert(EndUserBooksCollection),
        X.ToNovaByResultID(EndUserBooksCollection),
      ],
      EndUserBooksUpdateOne: [
        X.ToModel(EndUserBookUpdateInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.CheckDocumentExists(EndUserBooksCollection),
        X.ToDocumentUpdateByID(
          EndUserBooksCollection,
          null,
          ({ document }) => ({
            $set: document,
          })
        ),
        X.ToNovaByResultID(EndUserBooksCollection),
      ],
      EndUserBooksDeleteOne: [
        X.CheckDocumentExists(EndUserBooksCollection),
        X.ToDocumentDeleteByID(EndUserBooksCollection),
      ],
    },
  ],
  Subscription: {
    EndUserBooksSubscription: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscription(EndUserBooksCollection)],
    },
    EndUserBooksSubscriptionCount: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscriptionCount(EndUserBooksCollection)],
    },
  },
} as IResolverMap;
