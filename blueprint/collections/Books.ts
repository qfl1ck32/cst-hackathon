import { collection, field, relation } from "../utils";
import { BookChapters } from "./BookChapters";

export const Books = collection({
  id: "Books",

  representedBy: "title",

  mock: {
    count: 10,
  },

  behaviors: {
    blameable: true,
    softdeletable: true,
    timestampable: true,
  },

  fields: [
    field.string("title"),
    field.string("author"),
    field.string("genres", {
      isArray: true,
    }),
  ],

  relations: [
    relation({
      id: "chapters",

      to: () => BookChapters,

      inversedBy: "book",
    }),
  ],
});
