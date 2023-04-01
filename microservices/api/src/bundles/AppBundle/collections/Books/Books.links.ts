import { BookChaptersCollection } from "../BookChapters/BookChapters.collection";
import { IBundleLinkCollectionOption } from "@bluelibs/mongo-bundle";

// Export link names as constants with type of: IBundleLinkCollectionOption, sample:
// export const myCustomLink: IBundleLinkCollectionOption = { ... }

export const chapters: IBundleLinkCollectionOption = {
  collection: () => BookChaptersCollection,
  inversedBy: "book",
};
