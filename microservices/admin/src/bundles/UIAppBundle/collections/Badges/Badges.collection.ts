import {
  Collection,
  CollectionLinkConfig,
  CollectionTransformMap,
} from "@bluelibs/x-ui";
import { Badge } from "@root/api.types";
import {
  AppFilesCollection,
  AppFileGroupsCollection,
} from "@bluelibs/x-ui-admin";
import {} from "@bundles/UIAppBundle/collections";
import { ObjectId } from "@bluelibs/ejson";

export type { Badge };

export class BadgesCollection extends Collection<Badge> {
  getName() {
    return "Badges";
  }

  getInputs() {
    return {
      insert: "BadgeInsertInput!",
      update: "BadgeUpdateInput!",
    };
  }

  // Return here the relations with other configs
  getLinks(): CollectionLinkConfig<Badge>[] {
    return [
      {
        collection: () => AppFilesCollection,
        name: "icon",
        field: "iconId",
      },
    ];
  }

  // Return here how you want to transform certain fields
  getTransformMap(): CollectionTransformMap<Badge> {
    return {};
  }
}
