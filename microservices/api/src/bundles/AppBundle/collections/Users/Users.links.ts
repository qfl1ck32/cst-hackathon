import { EndUsersCollection } from "../EndUsers/EndUsers.collection";
import { UsersCollection } from "./Users.collection";
import { IBundleLinkCollectionOption } from "@bluelibs/mongo-bundle";

// Export link names as constants with type of: IBundleLinkCollectionOption, sample:
// export const myCustomLink: IBundleLinkCollectionOption = { ... }

export const createdBy: IBundleLinkCollectionOption = {
  collection: () => UsersCollection,
  field: "createdById",
};

export const updatedBy: IBundleLinkCollectionOption = {
  collection: () => UsersCollection,
  field: "updatedById",
};

export const endUser: IBundleLinkCollectionOption = {
  collection: () => EndUsersCollection,
  inversedBy: "owner",
};
