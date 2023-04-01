/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class BadgeUpdateInput {
  @Is(a.string().nullable())
  description?: string;

  @Is(an.objectId().nullable())
  iconId?: ObjectId;

  @Is(a.string().nullable())
  name?: string;
}
