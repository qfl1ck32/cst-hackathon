import { AppFilesCollection } from "@bluelibs/x-s3-bundle";
import { IBundleLinkCollectionOption } from "@bluelibs/mongo-bundle";

// Export link names as constants with type of: IBundleLinkCollectionOption, sample:
// export const myCustomLink: IBundleLinkCollectionOption = { ... }

export const icon: IBundleLinkCollectionOption = {
  collection: () => AppFilesCollection,
  field: "iconId",
};
