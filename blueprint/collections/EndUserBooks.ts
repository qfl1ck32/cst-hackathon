import { collection, field, relation } from "../utils";
import { Books } from "./Books";
import { EndUsers } from "./EndUsers";

export const EndUserBooks = collection({
  id: "EndUserBooks",

  mock: {
    count: 10,
  },

  behaviors: {
    blameable: true,
    softdeletable: true,
    timestampable: true,
  },

  fields: [
    field.object("chaptersTests", {
      isArray: true,

      subfields: [
        field.objectId("chapterId"),
        field.boolean("isPassed"),
        field.integer("score"),
        field.integer("numberOfTries"),
        field.objectId("testId"),
      ],
    }),

    field.float("progress", {
      isReducer: true,

      reducerDependency: {
        chaptersTests: 1,
      },
    }),
  ],

  relations: [
    relation({
      id: "book",

      to: () => Books,
    }),

    relation({
      id: "endUser",

      to: () => EndUsers,
    }),
  ],
});
