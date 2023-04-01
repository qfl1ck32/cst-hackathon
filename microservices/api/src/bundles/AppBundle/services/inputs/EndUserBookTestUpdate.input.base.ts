/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { EndUserBookTestQuestionType } from "@bundles/AppBundle/collections/EndUserBookTests";

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
}

@Schema()
export class EndUserBookTestUpdateInput {
  @Is(() => an.array().of(Schema.from(EndUserBookTestQuestionInput)))
  questions?: EndUserBookTestQuestionInput[] = [];
}
