import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { BadgeUpdateInput as BaseBadgeUpdateInput } from "./BadgeUpdate.input.base";

@Schema()
export class BadgeUpdateInput extends BaseBadgeUpdateInput {
  // You can extend the base here
}
