import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class EndUsersRegisterInput {
  @Is(a.string().required())
  email: string;

  @Is(a.string().required())
  password: string;

  @Is(a.string().required())
  username: string;
}
