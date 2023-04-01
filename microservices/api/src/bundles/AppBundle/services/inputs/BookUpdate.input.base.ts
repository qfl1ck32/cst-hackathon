/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class BookUpdateInput {
  @Is(a.string().nullable())
  author?: string;

  @Is(an.array().of(a.string()))
  genres?: string[] = [];

  @Is(a.string().nullable())
  title?: string;
}
