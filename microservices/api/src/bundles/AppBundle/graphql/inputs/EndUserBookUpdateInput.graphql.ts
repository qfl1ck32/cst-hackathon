export default /* GraphQL */ `
  input EndUserBookUpdateInput {
    bookId: ObjectId
    chaptersTests: [EndUserBookChaptersTestInput]
    endUserId: ObjectId
  }

  input EndUserBookChaptersTestInput {
    chapterId: ObjectId!
    isPassed: Boolean!
    score: Int!
    numberOfTries: Int!
    testId: ObjectId!
  }
`;
