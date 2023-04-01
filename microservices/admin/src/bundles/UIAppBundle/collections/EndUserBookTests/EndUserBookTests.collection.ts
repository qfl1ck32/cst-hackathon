import {
  Collection,
  CollectionLinkConfig,
  CollectionTransformMap,
} from "@bluelibs/x-ui";
import { EndUserBookTest } from "@root/api.types";
import {} from "@bundles/UIAppBundle/collections";
import { ObjectId } from "@bluelibs/ejson";

export type { EndUserBookTest };

export class EndUserBookTestsCollection extends Collection<EndUserBookTest> {
  getName() {
    return "EndUserBookTests";
  }

  getInputs() {
    return {
      insert: "EndUserBookTestInsertInput!",
      update: "EndUserBookTestUpdateInput!",
    };
  }

  // Return here the relations with other configs
  getLinks(): CollectionLinkConfig<EndUserBookTest>[] {
    return [];
  }

  // Return here how you want to transform certain fields
  getTransformMap(): CollectionTransformMap<EndUserBookTest> {
    return {};
  }
}
