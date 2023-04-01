import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { BookChapter } from "@bundles/UIAppBundle/collections";
import { BookChapterList as BaseBookChapterList } from "./BookChapterList.base";

@Service({ transient: true })
export class BookChapterList extends BaseBookChapterList {
  build() {
    super.build();
    // Perform additional modifications such as updating how a list item renders or add additional ones
  }

  static getRequestBody(): QueryBodyType<BookChapter> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
