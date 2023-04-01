import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { BookUpdateInput as BaseBookUpdateInput } from "./BookUpdate.input.base";

@Schema()
export class BookUpdateInput extends BaseBookUpdateInput {
  // You can extend the base here
}
