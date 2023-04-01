import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Badge } from "@bundles/UIAppBundle/collections";
import { BadgeViewer as BaseBadgeViewer } from "./BadgeViewer.base";

@Service({ transient: true })
export class BadgeViewer extends BaseBadgeViewer {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<Badge> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
