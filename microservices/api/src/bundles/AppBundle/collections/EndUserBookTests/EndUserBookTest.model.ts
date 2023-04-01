export * from "./EndUserBookTest.model.base";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { EndUserBookTest as BaseEndUserBookTest } from "./EndUserBookTest.model.base";
export { EndUserBookTestQuestion } from "./EndUserBookTest.model.base";
export { EndUserBookTestQuestionType } from "./enums/EndUserBookTestQuestionType.enum";

@Schema()
export class EndUserBookTest extends BaseEndUserBookTest {
  // You can extend the base here
}
