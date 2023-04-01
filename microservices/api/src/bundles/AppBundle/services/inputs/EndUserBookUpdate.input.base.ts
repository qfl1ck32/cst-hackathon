/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class EndUserBookChaptersTestInput {
  @Is(an.objectId().required())
  chapterId: ObjectId;

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

  @Is(() => an.array().of(Schema.from(EndUserBookChaptersTestInput)))
  chaptersTests?: EndUserBookChaptersTestInput[] = [];

  @Is(an.objectId().nullable())
  endUserId?: ObjectId;

  @Is(a.number().nullable())
  progress?: number;
}
