import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class EndUsersSubmitTestInput {
  @Is(an.objectId().required())
  chapterId: ObjectId;

  @Is(an.objectId().required())
  endUserBookId: ObjectId;

  @Is(an.array().of(a.string()))
  answers: string[];
}
