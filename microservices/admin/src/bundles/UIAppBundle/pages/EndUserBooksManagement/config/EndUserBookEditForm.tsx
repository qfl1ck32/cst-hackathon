import { Service } from "@bluelibs/core";
import { EndUserBookEditForm as BaseEndUserBookEditForm } from "./EndUserBookEditForm.base";
import { QueryBodyType } from "@bluelibs/x-ui";
import { EndUserBook } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class EndUserBookEditForm extends BaseEndUserBookEditForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<EndUserBook> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
