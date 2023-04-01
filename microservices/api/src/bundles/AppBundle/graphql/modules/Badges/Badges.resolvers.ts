import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";
import { BadgeInsertInput, BadgeUpdateInput } from "../../../services/inputs";
import { BadgesCollection } from "../../../collections/Badges/Badges.collection";

true;
export default {
  Query: [
    [],
    {
      BadgesFindOne: [X.ToNovaOne(BadgesCollection)],
      BadgesFind: [X.ToNova(BadgesCollection)],
      BadgesCount: [X.ToCollectionCount(BadgesCollection)],
    },
  ],
  Mutation: [
    [],
    {
      BadgesInsertOne: [
        X.ToModel(BadgeInsertInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.ToDocumentInsert(BadgesCollection),
        X.ToNovaByResultID(BadgesCollection),
      ],
      BadgesUpdateOne: [
        X.ToModel(BadgeUpdateInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.CheckDocumentExists(BadgesCollection),
        X.ToDocumentUpdateByID(BadgesCollection, null, ({ document }) => ({
          $set: document,
        })),
        X.ToNovaByResultID(BadgesCollection),
      ],
      BadgesDeleteOne: [
        X.CheckDocumentExists(BadgesCollection),
        X.ToDocumentDeleteByID(BadgesCollection),
      ],
    },
  ],
  Subscription: {
    BadgesSubscription: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscription(BadgesCollection)],
    },
    BadgesSubscriptionCount: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscriptionCount(BadgesCollection)],
    },
  },
} as IResolverMap;
