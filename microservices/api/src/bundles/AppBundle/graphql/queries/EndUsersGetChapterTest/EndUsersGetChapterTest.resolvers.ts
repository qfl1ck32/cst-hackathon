import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";

import { EndUsersGetChapterTestInput } from "../../../services/inputs/EndUsersGetChapterTest.input";
import { EndUserService } from "../../../services/EndUser.service";
import { UserRole } from "@bundles/AppBundle/collections";

export default {
  Query: {
    EndUsersGetChapterTest: [
      X.CheckLoggedIn(),
      X.CheckPermission(UserRole.END_USER),
      X.ToModel(EndUsersGetChapterTestInput),
      X.Validate(),
      X.ToService(EndUserService, "getChapterTest"),
    ],
  },
} as IResolverMap;
