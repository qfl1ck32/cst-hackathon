export default /* GraphQL */ `
  input EndUserBookInsertInput {
    bookId: ObjectId!
    chapterTests: [EndUserBookChapterTestInput]!
    endUserId: ObjectId!
    progress: Float!
  }

  input EndUserBookChapterTestInput {
    chapter: String!
    isPassed: Boolean!
    numberOfTries: Int!
    testId: ObjectId!
  }
`;
