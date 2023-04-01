import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { BookChapterUpdateInput as BaseBookChapterUpdateInput } from "./BookChapterUpdate.input.base";

@Schema()
export class BookChapterUpdateInput extends BaseBookChapterUpdateInput {
  // You can extend the base here
}
