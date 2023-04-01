export default /* GraphQL */ `
  input EndUserBookInsertInput {
    bookId: ObjectId!
    chaptersTests: [EndUserBookChaptersTestInput]!
    endUserId: ObjectId!
  }

  input EndUserBookChaptersTestInput {
    chapterId: ObjectId!
    isPassed: Boolean!
    score: Int!
    numberOfTries: Int!
    testId: ObjectId!
  }
`;
