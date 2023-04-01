import { Service } from "@bluelibs/core";
import { BadgeEditForm as BaseBadgeEditForm } from "./BadgeEditForm.base";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Badge } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class BadgeEditForm extends BaseBadgeEditForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<Badge> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
