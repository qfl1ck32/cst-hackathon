import { collection, field, relation, shortcuts } from "../utils";
import { Badges } from "./Badges";
import { EndUserBooks } from "./EndUserBooks";

export const EndUsers = collection({
  id: "EndUsers",

  mock: {
    count: 10,
  },

  behaviors: {
    blameable: true,
    softdeletable: true,
    timestampable: true,
  },

  fields: [field.integer("level"), field.integer("experience"), field.integer("gold")],

  relations: [
    shortcuts.relation.user({ id: "owner", representedBy: "username", unique: true }),

    relation({
      id: "books",
      to: () => EndUserBooks,
      inversedBy: "endUser",
    }),

    relation({
      id: "badges",
      to: () => Badges,

      isMany: true,
    }),
  ],
});
