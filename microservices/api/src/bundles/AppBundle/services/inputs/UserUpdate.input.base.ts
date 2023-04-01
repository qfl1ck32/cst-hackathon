/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { UserRole } from "../../collections";

@Schema()
export class UserUpdateInput {
  @Is(a.boolean().nullable())
  isEnabled?: boolean;

  @Is(an.array().of(a.string().oneOf(Object.values(UserRole).concat(null))))
  roles?: UserRole[] = [];
}
