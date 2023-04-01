/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { EndUserBookTestQuestionType } from "./enums/EndUserBookTestQuestionType.enum";
export { EndUserBookTestQuestionType };

@Schema()
export class EndUserBookTestQuestion {
  @Is(a.string().required())
  text: string;

  @Is(
    a
      .string()
      .oneOf(Object.values(EndUserBookTestQuestionType).concat(null))
      .required()
  )
  type: EndUserBookTestQuestionType;
}

@Schema()
export class EndUserBookTest {
  @Is(an.objectId())
  _id?: ObjectId;

  @Is(() => an.array().of(Schema.from(EndUserBookTestQuestion)))
  questions: EndUserBookTestQuestion[] = [];
}
