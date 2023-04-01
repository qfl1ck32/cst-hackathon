import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { BookChapterInsertInput as BaseBookChapterInsertInput } from "./BookChapterInsert.input.base";

@Schema()
export class BookChapterInsertInput extends BaseBookChapterInsertInput {
  // You can extend the base here
}
