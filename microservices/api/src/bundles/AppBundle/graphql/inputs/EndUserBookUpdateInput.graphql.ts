export default /* GraphQL */ `
  input EndUserBookUpdateInput {
    bookId: ObjectId
    chaptersTests: [EndUserBookChaptersTestInput]
    endUserId: ObjectId
    progress: Float
  }

  input EndUserBookChaptersTestInput {
    chapterId: ObjectId!
    isPassed: Boolean!
    numberOfTries: Int!
    testId: ObjectId!
  }
`;
