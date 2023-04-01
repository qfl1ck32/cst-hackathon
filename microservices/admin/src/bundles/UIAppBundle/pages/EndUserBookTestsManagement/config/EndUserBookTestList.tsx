import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { EndUserBookTest } from "@bundles/UIAppBundle/collections";
import { EndUserBookTestList as BaseEndUserBookTestList } from "./EndUserBookTestList.base";

@Service({ transient: true })
export class EndUserBookTestList extends BaseEndUserBookTestList {
  build() {
    super.build();
    // Perform additional modifications such as updating how a list item renders or add additional ones
  }

  static getRequestBody(): QueryBodyType<EndUserBookTest> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
