/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { EndUserBookTestQuestionType } from "../../collections";

@Schema()
export class EndUserBookTestQuestionInput {
  @Is(a.string().required())
  text: string;

  @Is(
    a
      .string()
      .oneOf(Object.values(EndUserBookTestQuestionType).concat(null))
      .required()
  )
  type: EndUserBookTestQuestionType;

  @Is(an.array().of(a.string()))
  choices?: string[] = [];
}

@Schema()
export class EndUserBookTestInsertInput {
  @Is(() => an.array().of(Schema.from(EndUserBookTestQuestionInput)))
  questions: EndUserBookTestQuestionInput[] = [];
}
