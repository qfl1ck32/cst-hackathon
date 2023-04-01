/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class EndUserBookTestInput {
  @Is(a.number().required())
  chapter: number;

  @Is(a.number().required())
  numberOfTries: number;

  @Is(a.boolean().required())
  isPassed: boolean;
}

@Schema()
export class EndUserBookInsertInput {
  @Is(an.objectId().required())
  bookId: ObjectId;

  @Is(an.objectId().required())
  endUserId: ObjectId;

  @Is(a.number().required())
  progress: number;

  @Is(() => an.array().of(Schema.from(EndUserBookTestInput)))
  tests: EndUserBookTestInput[] = [];
}
