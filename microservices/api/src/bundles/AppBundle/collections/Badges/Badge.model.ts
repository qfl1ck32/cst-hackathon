export * from "./Badge.model.base";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { Badge as BaseBadge } from "./Badge.model.base";

@Schema()
export class Badge extends BaseBadge {
  // You can extend the base here
}
