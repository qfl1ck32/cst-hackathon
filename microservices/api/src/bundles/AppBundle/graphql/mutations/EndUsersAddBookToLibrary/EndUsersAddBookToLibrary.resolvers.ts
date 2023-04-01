import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";

import { EndUsersAddBookToLibraryInput } from "../../../services/inputs/EndUsersAddBookToLibrary.input";
import { EndUserService } from "../../../services/EndUser.service";
import { UserRole } from "@bundles/AppBundle/collections";

export default {
  Mutation: {
    EndUsersAddBookToLibrary: [
      X.CheckLoggedIn(),
      X.CheckPermission(UserRole.END_USER),
      X.ToModel(EndUsersAddBookToLibraryInput),
      X.Validate(),
      X.ToService(EndUserService, "addBookToLibrary"),
    ],
  },
} as IResolverMap;
