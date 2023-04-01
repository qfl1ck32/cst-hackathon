export * from "./BookChapter.model.base";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { BookChapter as BaseBookChapter } from "./BookChapter.model.base";

@Schema()
export class BookChapter extends BaseBookChapter {
  // You can extend the base here
}
