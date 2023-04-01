import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Book } from "@bundles/UIAppBundle/collections";
import { BookList as BaseBookList } from "./BookList.base";

@Service({ transient: true })
export class BookList extends BaseBookList {
  build() {
    super.build();
    // Perform additional modifications such as updating how a list item renders or add additional ones
  }

  static getRequestBody(): QueryBodyType<Book> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
