import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { EndUserBook } from "@bundles/UIAppBundle/collections";
import { EndUserBookViewer as BaseEndUserBookViewer } from "./EndUserBookViewer.base";

@Service({ transient: true })
export class EndUserBookViewer extends BaseEndUserBookViewer {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<EndUserBook> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
