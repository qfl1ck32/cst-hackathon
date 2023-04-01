import { collection, field, shortcuts } from "../utils";

export const Badges = collection({
  id: "Badges",

  representedBy: "name",

  mock: {
    count: 10,
  },

  behaviors: {
    blameable: true,
    softdeletable: true,
    timestampable: true,
  },

  fields: [field.string("name"), field.string("description")],

  relations: [shortcuts.relation.file("icon")],
});
