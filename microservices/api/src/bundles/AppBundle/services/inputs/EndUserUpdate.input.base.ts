/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class EndUserUpdateInput {
  @Is(an.array().of(an.objectId()))
  badgesIds?: ObjectId[] = [];

  @Is(a.number().nullable())
  experience?: number;

  @Is(a.number().nullable())
  gold?: number;

  @Is(a.number().nullable())
  level?: number;

  @Is(an.objectId().nullable())
  ownerId?: ObjectId;
}
