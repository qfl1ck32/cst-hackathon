import { EndUsersCollection } from "../EndUsers/EndUsers.collection";
import { BooksCollection } from "../Books/Books.collection";
import { IBundleLinkCollectionOption } from "@bluelibs/mongo-bundle";

// Export link names as constants with type of: IBundleLinkCollectionOption, sample:
// export const myCustomLink: IBundleLinkCollectionOption = { ... }

export const book: IBundleLinkCollectionOption = {
  collection: () => BooksCollection,
  field: "bookId",
};

export const endUser: IBundleLinkCollectionOption = {
  collection: () => EndUsersCollection,
  field: "endUserId",
};
