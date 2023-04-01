import {
  Collection,
  CollectionLinkConfig,
  CollectionTransformMap,
} from "@bluelibs/x-ui";
import { Book } from "@root/api.types";
import {} from "@bundles/UIAppBundle/collections";
import { ObjectId } from "@bluelibs/ejson";

export type { Book };

export class BooksCollection extends Collection<Book> {
  getName() {
    return "Books";
  }

  getInputs() {
    return {
      insert: "BookInsertInput!",
      update: "BookUpdateInput!",
    };
  }

  // Return here the relations with other configs
  getLinks(): CollectionLinkConfig<Book>[] {
    return [];
  }

  // Return here how you want to transform certain fields
  getTransformMap(): CollectionTransformMap<Book> {
    return {};
  }
}
