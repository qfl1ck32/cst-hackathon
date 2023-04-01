import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";

import { EndUsersLoginInput } from "../../../services/inputs/EndUsersLogin.input";
import { EndUserService } from "../../../services/EndUser.service";

export default {
  Mutation: {
    EndUsersLogin: [
      X.ToModel(EndUsersLoginInput),
      X.Validate(),
      X.ToService(EndUserService, "login"),
    ],
  },
} as IResolverMap;
