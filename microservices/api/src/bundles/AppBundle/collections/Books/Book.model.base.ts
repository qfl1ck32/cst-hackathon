/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { BookChapter } from "../";

@Schema()
export class Book {
  @Is(an.objectId())
  _id?: ObjectId;

  @Is(a.string().required())
  author: string;

  chapters: BookChapter[] = [];

  @Is(an.array().of(a.string()).required())
  genres: string[] = [];

  @Is(a.string().required())
  title: string;
}
