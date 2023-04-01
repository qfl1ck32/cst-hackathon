import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class EndUsersGenerateTestInput {
  @Is(an.objectId().required())
  endUserBookId: ObjectId;

  @Is(a.string().required())
  chapter: string;
}
