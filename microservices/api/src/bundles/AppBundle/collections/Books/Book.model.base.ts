/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class Book {
  @Is(an.objectId())
  _id?: ObjectId;

  @Is(a.string().required())
  author: string;

  @Is(an.array().of(a.string()).required())
  chapters: string[] = [];

  @Is(an.array().of(a.string()).required())
  genres: string[] = [];

  @Is(a.string().required())
  title: string;
}
