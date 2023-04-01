import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Badge } from "@bundles/UIAppBundle/collections";
import { BadgeList as BaseBadgeList } from "./BadgeList.base";

@Service({ transient: true })
export class BadgeList extends BaseBadgeList {
  build() {
    super.build();
    // Perform additional modifications such as updating how a list item renders or add additional ones
  }

  static getRequestBody(): QueryBodyType<Badge> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
