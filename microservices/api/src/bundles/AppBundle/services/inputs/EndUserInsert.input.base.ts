/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class EndUserInsertInput {
  @Is(an.objectId().required())
  badgesId: ObjectId;

  @Is(an.objectId().required())
  booksId: ObjectId;

  @Is(a.number().required())
  experience: number;

  @Is(a.string().required())
  fullName: string;

  @Is(a.number().required())
  gold: number;

  @Is(a.number().required())
  level: number;

  @Is(an.objectId().required())
  ownerId: ObjectId;
}
