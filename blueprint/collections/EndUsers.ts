import { collection, field, relation, shortcuts } from "../utils";
import { Badges } from "./Badges";
import { EndUserBooks } from "./EndUserBooks";

export const EndUsers = collection({
  id: "EndUsers",

  representedBy: "fullName",

  mock: {
    count: 10,
  },

  behaviors: {
    blameable: true,
    softdeletable: true,
    timestampable: true,
  },

  fields: [field.string("fullName"), field.integer("level"), field.integer("experience"), field.integer("gold")],

  relations: [
    shortcuts.relation.user({ id: "owner" }),

    relation({
      id: "books",
      to: () => EndUserBooks,
    }),

    relation({
      id: "badges",
      to: () => Badges,
    }),
  ],
});
