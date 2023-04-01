/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class BookChapterUpdateInput {
  @Is(an.objectId().nullable())
  bookId?: ObjectId;

  @Is(a.string().nullable())
  title?: string;
}
