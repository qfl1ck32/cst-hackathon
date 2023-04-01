import { blameableOverrides } from "../utils";
import { collection, field, relation, shortcuts, sharedModel, faker } from "../utils";

export const Users = collection({
  id: "Users",

  representedBy: "username",

  behaviors: {
    softdeletable: true,
  },
  mock: {
    count: 10,
  },
  fields: [
    // Standard fields present for user (isEnabled, createdAt)
    // ...shortcuts.fields.user.standard(), // we don't have "profile"

    field({
      id: "isEnabled",
      isRequired: true,
      type: field.types.BOOLEAN,
      mock: {
        generator: () => true,
      },
    }),

    field({
      id: "createdAt",
      isRequired: true,
      type: field.types.DATE,
      ui: {
        create: false,
        edit: false,
      },
    }),

    // Information about password storage (hash, email, etc)
    shortcuts.field.user.password(),
    shortcuts.field.softdeletable(),
    ...shortcuts.fields.timestampable(),
    field({
      id: "roles",
      type: field.types.ENUM,
      enumValues: ["ADMIN", "END_USER"],
      isArray: true,
    }),
    field({
      id: "email",
      type: field.types.STRING,
      isReducer: true,
    }),
    field({
      id: "username",
      type: field.types.STRING,
      isReducer: true,
    }),
  ],
  relations: [...shortcuts.relations.blameable(blameableOverrides)],
});
