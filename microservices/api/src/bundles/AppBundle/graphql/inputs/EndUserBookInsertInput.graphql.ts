export default /* GraphQL */ `
  input EndUserBookInsertInput {
    bookId: ObjectId!
    chaptersTests: [EndUserBookChaptersTestInput]!
    endUserId: ObjectId!
    progress: Float!
  }

  input EndUserBookChaptersTestInput {
    chapterId: ObjectId!
    isPassed: Boolean!
    numberOfTries: Int!
    testId: ObjectId!
  }
`;
