import { Studio } from "@bluelibs/x";
import * as faker from "faker";

import { BlameableRelationOverrideType } from "@bluelibs/x/dist/studio";

export const blameableOverrides: BlameableRelationOverrideType = {
  created: {
    representedBy: "username",
  },

  updated: {
    representedBy: "username",
  },
};

// Dummy file for easy importing of the things you need for your blueprint
const { generateProject, app, collection, field, relation, shortcuts, sharedModel, GeneratorKind } = Studio;

export { generateProject, app, collection, field, relation, shortcuts, sharedModel, GeneratorKind, faker };
