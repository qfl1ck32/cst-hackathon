import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class EndUsersSearchBookInput {
  @Is(a.string().required())
  title: string;
}
