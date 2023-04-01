import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";

import { EndUsersGenerateTestInput } from "../../../services/inputs/EndUsersGenerateTest.input";
import { EndUserService } from "../../../services/EndUser.service";
import { UserRole } from "@bundles/AppBundle/collections";

export default {
  Mutation: {
    EndUsersGenerateTest: [
      X.CheckLoggedIn(),
      X.CheckPermission(UserRole.END_USER),
      X.ToModel(EndUsersGenerateTestInput),
      X.Validate(),
      X.ToService(EndUserService, "generateTest"),
    ],
  },
} as IResolverMap;
