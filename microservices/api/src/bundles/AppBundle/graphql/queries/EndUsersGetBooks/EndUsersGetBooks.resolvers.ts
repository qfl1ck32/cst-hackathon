import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";

import { EndUserService } from "../../../services/EndUser.service";
import { UserRole } from "@bundles/AppBundle/collections";

export default {
  Query: {
    EndUsersGetBooks: [
      X.CheckLoggedIn(),
      X.CheckPermission(UserRole.END_USER),
      X.ToService(EndUserService, "getBooks", (_, ctx) => [ctx.userId]),
    ],
  },
} as IResolverMap;
