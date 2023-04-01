import {
  Collection,
  CollectionLinkConfig,
  CollectionTransformMap,
} from "@bluelibs/x-ui";
import { BookChapter } from "@root/api.types";
import { BooksCollection } from "@bundles/UIAppBundle/collections";
import { ObjectId } from "@bluelibs/ejson";

export type { BookChapter };

export class BookChaptersCollection extends Collection<BookChapter> {
  getName() {
    return "BookChapters";
  }

  getInputs() {
    return {
      insert: "BookChapterInsertInput!",
      update: "BookChapterUpdateInput!",
    };
  }

  // Return here the relations with other configs
  getLinks(): CollectionLinkConfig<BookChapter>[] {
    return [
      {
        collection: () => BooksCollection,
        name: "book",
        field: "bookId",
      },
    ];
  }

  // Return here how you want to transform certain fields
  getTransformMap(): CollectionTransformMap<BookChapter> {
    return {};
  }
}
