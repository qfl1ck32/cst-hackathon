/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { Book } from "../";
import { EndUser } from "../";

@Schema()
export class EndUserBookChapterTest {
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
export class EndUserBook {
  @Is(an.objectId())
  _id?: ObjectId;

  book: Book;

  @Is(an.objectId().required())
  bookId: ObjectId;

  @Is(() => an.array().of(Schema.from(EndUserBookChapterTest)))
  chapterTests: EndUserBookChapterTest[] = [];

  endUser: EndUser;

  @Is(an.objectId().required())
  endUserId: ObjectId;

  @Is(a.number().required())
  progress: number;
}
