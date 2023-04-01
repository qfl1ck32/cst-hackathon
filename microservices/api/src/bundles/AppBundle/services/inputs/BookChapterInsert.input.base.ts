/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class BookChapterInsertInput {
  @Is(an.objectId().required())
  bookId: ObjectId;

  @Is(a.string().required())
  title: string;
}
