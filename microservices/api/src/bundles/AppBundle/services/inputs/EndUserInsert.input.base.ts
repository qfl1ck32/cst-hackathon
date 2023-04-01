/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class EndUserInsertInput {
  @Is(an.array().of(an.objectId()).required())
  badgesIds: ObjectId[] = [];

  @Is(a.number().required())
  experience: number;

  @Is(a.number().required())
  gold: number;

  @Is(a.number().required())
  level: number;

  @Is(an.objectId().required())
  ownerId: ObjectId;
}
