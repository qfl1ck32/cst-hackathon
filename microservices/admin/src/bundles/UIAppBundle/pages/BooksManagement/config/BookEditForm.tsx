import { Service } from "@bluelibs/core";
import { BookEditForm as BaseBookEditForm } from "./BookEditForm.base";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Book } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class BookEditForm extends BaseBookEditForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<Book> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
