import { Service } from "@bluelibs/core";
import { BookChapterEditForm as BaseBookChapterEditForm } from "./BookChapterEditForm.base";
import { QueryBodyType } from "@bluelibs/x-ui";
import { BookChapter } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class BookChapterEditForm extends BaseBookChapterEditForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<BookChapter> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
