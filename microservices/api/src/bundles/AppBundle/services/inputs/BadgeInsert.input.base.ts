/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class BadgeInsertInput {
  @Is(a.string().required())
  description: string;

  @Is(an.objectId().nullable())
  iconId?: ObjectId;

  @Is(a.string().required())
  name: string;
}
