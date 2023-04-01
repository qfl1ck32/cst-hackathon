export * from "./EndUserBook.model.base";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { EndUserBook as BaseEndUserBook } from "./EndUserBook.model.base";

@Schema()
export class EndUserBook extends BaseEndUserBook {
  // You can extend the base here
}
