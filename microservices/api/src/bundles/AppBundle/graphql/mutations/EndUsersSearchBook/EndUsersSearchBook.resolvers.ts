import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";

import { EndUsersSearchBookInput } from "../../../services/inputs/EndUsersSearchBook.input";
import { EndUserService } from "../../../services/EndUser.service";
import { UserRole } from "@bundles/AppBundle/collections";

export default {
  Mutation: {
    EndUsersSearchBook: [
      X.CheckLoggedIn(),
      X.CheckPermission(UserRole.END_USER),
      X.ToModel(EndUsersSearchBookInput),
      X.Validate(),
      X.ToService(EndUserService, "searchBook"),
    ],
  },
} as IResolverMap;
