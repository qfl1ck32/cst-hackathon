import { Collection, Behaviors } from "@bluelibs/mongo-bundle";
import { Behaviors as XBehaviors } from "@bluelibs/x-bundle";
import * as links from "./EndUserBookTests.links";
import * as reducers from "./EndUserBookTests.reducers";
import { EndUserBookTest } from "./EndUserBookTest.model";

export class EndUserBookTestsCollection extends Collection<EndUserBookTest> {
  static collectionName = "endUserBookTests";
  static model = EndUserBookTest;

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
