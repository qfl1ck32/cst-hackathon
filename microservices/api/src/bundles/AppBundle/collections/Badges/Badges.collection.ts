import { Collection, Behaviors } from "@bluelibs/mongo-bundle";
import { Behaviors as XBehaviors } from "@bluelibs/x-bundle";
import * as links from "./Badges.links";
import * as reducers from "./Badges.reducers";
import { Badge } from "./Badge.model";

export class BadgesCollection extends Collection<Badge> {
  static collectionName = "badges";
  static model = Badge;

  static links = links;
  static reducers = reducers;

  static behaviors = [
    Behaviors.Timestampable(),

    Behaviors.Blameable(),

    Behaviors.Softdeletable(),

    XBehaviors.Live(),
  ];

  // Create an array of indexes
  static indexes = [
    { key: { isDeleted: 1 } },
    { key: { createdAt: 1 } },
    { key: { createdBy: 1 } },
  ];
}
