/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class EndUserBookTestInput {
  @Is(a.boolean().required())
  isPassed: boolean;

  @Is(a.number().required())
  numberOfTries: number;

  @Is(an.objectId().nullable())
  testId?: ObjectId;
}
