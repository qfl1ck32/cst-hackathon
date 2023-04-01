import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { BookChapter } from "@bundles/UIAppBundle/collections";
import { BookChapterViewer as BaseBookChapterViewer } from "./BookChapterViewer.base";

@Service({ transient: true })
export class BookChapterViewer extends BaseBookChapterViewer {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<BookChapter> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
