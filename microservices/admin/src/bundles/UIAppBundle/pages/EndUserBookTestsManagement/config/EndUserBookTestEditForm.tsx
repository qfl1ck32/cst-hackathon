import { Service } from "@bluelibs/core";
import { EndUserBookTestEditForm as BaseEndUserBookTestEditForm } from "./EndUserBookTestEditForm.base";
import { QueryBodyType } from "@bluelibs/x-ui";
import { EndUserBookTest } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class EndUserBookTestEditForm extends BaseEndUserBookTestEditForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<EndUserBookTest> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
