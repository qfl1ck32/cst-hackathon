import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";

import { EndUsersSubmitTestInput } from "../../../services/inputs/EndUsersSubmitTest.input";
import { EndUserService } from "../../../services/EndUser.service";
import { UserRole } from "@bundles/AppBundle/collections";

export default {
  Mutation: {
    EndUsersSubmitTest: [
      X.CheckLoggedIn(),
      X.CheckPermission(UserRole.END_USER),
      X.ToModel(EndUsersSubmitTestInput),
      X.Validate(),
      X.ToService(EndUserService, "submitTest"),
    ],
  },
} as IResolverMap;
