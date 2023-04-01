/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class EndUserUpdateInput {
  @Is(an.objectId().nullable())
  badgesId?: ObjectId;

  @Is(an.objectId().nullable())
  booksId?: ObjectId;

  @Is(a.number().nullable())
  experience?: number;

  @Is(a.string().nullable())
  fullName?: string;

  @Is(a.number().nullable())
  gold?: number;

  @Is(a.number().nullable())
  level?: number;

  @Is(an.objectId().nullable())
  ownerId?: ObjectId;
}
