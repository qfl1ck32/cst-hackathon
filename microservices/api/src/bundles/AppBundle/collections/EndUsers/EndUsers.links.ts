import { BadgesCollection } from "../Badges/Badges.collection";
import { EndUserBooksCollection } from "../EndUserBooks/EndUserBooks.collection";
import { UsersCollection } from "../Users/Users.collection";
import { IBundleLinkCollectionOption } from "@bluelibs/mongo-bundle";

// Export link names as constants with type of: IBundleLinkCollectionOption, sample:
// export const myCustomLink: IBundleLinkCollectionOption = { ... }

export const owner: IBundleLinkCollectionOption = {
  collection: () => UsersCollection,
  field: "ownerId",
};

export const books: IBundleLinkCollectionOption = {
  collection: () => EndUserBooksCollection,
  field: "booksId",
};

export const badges: IBundleLinkCollectionOption = {
  collection: () => BadgesCollection,
  field: "badgesId",
};
