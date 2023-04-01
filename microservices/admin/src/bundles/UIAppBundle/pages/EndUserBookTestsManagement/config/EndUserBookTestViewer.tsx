import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { EndUserBookTest } from "@bundles/UIAppBundle/collections";
import { EndUserBookTestViewer as BaseEndUserBookTestViewer } from "./EndUserBookTestViewer.base";

@Service({ transient: true })
export class EndUserBookTestViewer extends BaseEndUserBookTestViewer {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<EndUserBookTest> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
