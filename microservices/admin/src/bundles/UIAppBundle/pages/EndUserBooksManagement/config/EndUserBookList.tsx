import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { EndUserBook } from "@bundles/UIAppBundle/collections";
import { EndUserBookList as BaseEndUserBookList } from "./EndUserBookList.base";

@Service({ transient: true })
export class EndUserBookList extends BaseEndUserBookList {
  build() {
    super.build();
    // Perform additional modifications such as updating how a list item renders or add additional ones
  }

  static getRequestBody(): QueryBodyType<EndUserBook> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
