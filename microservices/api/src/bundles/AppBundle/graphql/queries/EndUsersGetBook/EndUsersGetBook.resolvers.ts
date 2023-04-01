import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";

import { EndUsersGetBookInput } from "../../../services/inputs/EndUsersGetBook.input";
import { EndUserService } from "../../../services/EndUser.service";
import { UserRole } from "@bundles/AppBundle/collections";

export default {
  Query: {
    EndUsersGetBook: [
      X.CheckLoggedIn(),
      X.CheckPermission(UserRole.END_USER),
      X.ToModel(EndUsersGetBookInput),
      X.Validate(),
      X.ToService(EndUserService, "getBook"),
    ],
  },
} as IResolverMap;
