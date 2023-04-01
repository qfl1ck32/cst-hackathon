import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class EndUsersLoginInput {
  @Is(a.string().required())
  usernameOrEmail: string;

  @Is(a.string().required())
  password: string;
}
