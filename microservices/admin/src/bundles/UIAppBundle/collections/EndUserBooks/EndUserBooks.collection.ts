import {
  Collection,
  CollectionLinkConfig,
  CollectionTransformMap,
} from "@bluelibs/x-ui";
import { EndUserBook } from "@root/api.types";
import {
  BooksCollection,
  EndUsersCollection,
} from "@bundles/UIAppBundle/collections";
import { ObjectId } from "@bluelibs/ejson";

export type { EndUserBook };

export class EndUserBooksCollection extends Collection<EndUserBook> {
  getName() {
    return "EndUserBooks";
  }

  getInputs() {
    return {
      insert: "EndUserBookInsertInput!",
      update: "EndUserBookUpdateInput!",
    };
  }

  // Return here the relations with other configs
  getLinks(): CollectionLinkConfig<EndUserBook>[] {
    return [
      {
        collection: () => BooksCollection,
        name: "book",
        field: "bookId",
      },
      {
        collection: () => EndUsersCollection,
        name: "endUser",
        field: "endUserId",
      },
    ];
  }

  // Return here how you want to transform certain fields
  getTransformMap(): CollectionTransformMap<EndUserBook> {
    return {};
  }
}
