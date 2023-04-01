/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class EndUserBookTestInput {
  @Is(a.string().required())
  chapter: string;

  @Is(a.boolean().required())
  isPassed: boolean;

  @Is(a.number().required())
  numberOfTries: number;

  @Is(an.objectId().required())
  testId: ObjectId;
}

@Schema()
export class EndUserBookUpdateInput {
  @Is(an.objectId().nullable())
  bookId?: ObjectId;

  @Is(an.objectId().nullable())
  endUserId?: ObjectId;

  @Is(a.number().nullable())
  progress?: number;

  @Is(() => an.array().of(Schema.from(EndUserBookTestInput)))
  tests?: EndUserBookTestInput[] = [];
}
