/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { Book } from "../";
import { EndUser } from "../";

@Schema()
export class EndUserBookChaptersTest {
  @Is(an.objectId().required())
  chapterId: ObjectId;

  @Is(a.boolean().required())
  isPassed: boolean;

  @Is(a.number().required())
  score: number;

  @Is(a.number().required())
  numberOfTries: number;

  @Is(an.objectId().required())
  testId: ObjectId;
}

@Schema()
export class EndUserBook {
  @Is(an.objectId())
  _id?: ObjectId;

  book: Book;

  @Is(an.objectId().required())
  bookId: ObjectId;

  @Is(() => an.array().of(Schema.from(EndUserBookChaptersTest)))
  chaptersTests: EndUserBookChaptersTest[] = [];

  endUser: EndUser;

  @Is(an.objectId().required())
  endUserId: ObjectId;

  progress: number;
}
