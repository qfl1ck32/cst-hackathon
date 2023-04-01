import { collection, field } from "../utils";

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
    field.string("chapters", {
      isArray: true,
    }),
  ],
});
