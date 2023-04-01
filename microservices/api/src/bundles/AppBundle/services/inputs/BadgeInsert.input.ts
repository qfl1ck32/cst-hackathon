import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { BadgeInsertInput as BaseBadgeInsertInput } from "./BadgeInsert.input.base";

@Schema()
export class BadgeInsertInput extends BaseBadgeInsertInput {
  // You can extend the base here
}
