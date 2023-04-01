import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class EndUsersGetBookInput {
  @Is(an.objectId().required())
  endUserBookId: ObjectId;
}
