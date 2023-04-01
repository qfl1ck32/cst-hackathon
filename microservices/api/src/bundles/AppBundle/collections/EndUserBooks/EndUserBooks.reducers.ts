import { IReducerOption } from "@bluelibs/nova";
import { EndUserBook } from "./EndUserBook.model.base";

// Export link names as constants with type of: IReducerOption, sample:
// export const myCustomLink: IReducerOption = { ... }

export const progress: IReducerOption = {
  dependency: { chaptersTests: 1 },
  async reduce(parent: EndUserBook, { context }) {
    // You can access the container via: context.container
    // TODO: service
    return (
      (parent.chaptersTests.reduce((acc, curr) => {
        return acc + Number(curr.isPassed);
      }, 0) /
        parent.chaptersTests.length) *
      100
    );
  },
};
