/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { Book } from "../";

@Schema()
export class BookChapter {
  @Is(an.objectId())
  _id?: ObjectId;

  book: Book;

  @Is(an.objectId().required())
  bookId: ObjectId;

  @Is(a.string().required())
  title: string;
}
