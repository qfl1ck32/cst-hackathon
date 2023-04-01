import { collection, field } from "../utils";

export const EndUserBookTests = collection({
  id: "EndUserBookTests",

  mock: {
    count: 10,
  },

  behaviors: {
    blameable: true,
    softdeletable: true,
    timestampable: true,
  },

  fields: [
    field.object("questions", {
      subfields: [
        field.string("text"),

        field.enum("type", {
          enumValues: ["MULTIPLE_CHOICE", "BOOLEAN", "TEXT"],
        }),

        field.string("choices", {
          isArray: true,
          isRequired: false,
        }),
      ],

      isArray: true,
    }),
  ],
});
