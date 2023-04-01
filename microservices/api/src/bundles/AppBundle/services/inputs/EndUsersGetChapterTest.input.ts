import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class EndUsersGetChapterTestInput {
  @Is(an.objectId().required())
  endUserBookId: ObjectId;

  @Is(an.objectId().required())
  chapterId: ObjectId;
}
