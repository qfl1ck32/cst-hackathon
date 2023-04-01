import { Collection, Behaviors } from "@bluelibs/mongo-bundle";
import { Behaviors as XBehaviors } from "@bluelibs/x-bundle";
import * as links from "./EndUserBooks.links";
import * as reducers from "./EndUserBooks.reducers";
import { EndUserBook } from "./EndUserBook.model";

export class EndUserBooksCollection extends Collection<EndUserBook> {
  static collectionName = "endUserBooks";
  static model = EndUserBook;

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
