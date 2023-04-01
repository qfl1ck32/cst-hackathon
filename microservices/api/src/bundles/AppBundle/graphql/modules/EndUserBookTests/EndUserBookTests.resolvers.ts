import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";
import {
  EndUserBookTestInsertInput,
  EndUserBookTestUpdateInput,
} from "../../../services/inputs";
import { EndUserBookTestsCollection } from "../../../collections/EndUserBookTests/EndUserBookTests.collection";

true;
export default {
  Query: [
    [],
    {
      EndUserBookTestsFindOne: [X.ToNovaOne(EndUserBookTestsCollection)],
      EndUserBookTestsFind: [X.ToNova(EndUserBookTestsCollection)],
      EndUserBookTestsCount: [X.ToCollectionCount(EndUserBookTestsCollection)],
    },
  ],
  Mutation: [
    [],
    {
      EndUserBookTestsInsertOne: [
        X.ToModel(EndUserBookTestInsertInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.ToDocumentInsert(EndUserBookTestsCollection),
        X.ToNovaByResultID(EndUserBookTestsCollection),
      ],
      EndUserBookTestsUpdateOne: [
        X.ToModel(EndUserBookTestUpdateInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.CheckDocumentExists(EndUserBookTestsCollection),
        X.ToDocumentUpdateByID(
          EndUserBookTestsCollection,
          null,
          ({ document }) => ({
            $set: document,
          })
        ),
        X.ToNovaByResultID(EndUserBookTestsCollection),
      ],
      EndUserBookTestsDeleteOne: [
        X.CheckDocumentExists(EndUserBookTestsCollection),
        X.ToDocumentDeleteByID(EndUserBookTestsCollection),
      ],
    },
  ],
  Subscription: {
    EndUserBookTestsSubscription: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscription(EndUserBookTestsCollection)],
    },
    EndUserBookTestsSubscriptionCount: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscriptionCount(EndUserBookTestsCollection)],
    },
  },
} as IResolverMap;
