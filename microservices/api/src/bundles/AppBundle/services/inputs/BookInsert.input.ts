import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { BookInsertInput as BaseBookInsertInput } from "./BookInsert.input.base";

@Schema()
export class BookInsertInput extends BaseBookInsertInput {
  // You can extend the base here
}
