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
    field.object("tests", {
      isArray: true,

      subfields: [field.integer("chapter"), field.integer("numberOfTries"), field.boolean("isPassed")],
    }),

    field.float("progress"),
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
