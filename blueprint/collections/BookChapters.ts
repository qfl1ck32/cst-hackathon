import { collection, field, relation } from "../utils";
import { Books } from "./Books";

export const BookChapters = collection({
  id: "BookChapters",

  representedBy: "title",

  mock: {
    count: 10,
  },

  behaviors: {
    blameable: true,
    softdeletable: true,
    timestampable: true,
  },

  fields: [field.string("title")],

  relations: [
    relation({
      id: "book",

      to: () => Books,
    }),
  ],
});
