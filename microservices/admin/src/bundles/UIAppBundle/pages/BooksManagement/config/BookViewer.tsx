import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Book } from "@bundles/UIAppBundle/collections";
import { BookViewer as BaseBookViewer } from "./BookViewer.base";

@Service({ transient: true })
export class BookViewer extends BaseBookViewer {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<Book> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
