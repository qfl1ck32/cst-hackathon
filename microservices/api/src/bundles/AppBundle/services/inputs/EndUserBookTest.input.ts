import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { EndUserBookTestInput as BaseEndUserBookTestInput } from "./EndUserBookTest.input.base";

@Schema()
export class EndUserBookTestInput extends BaseEndUserBookTestInput {
  // You can extend the base here
}
