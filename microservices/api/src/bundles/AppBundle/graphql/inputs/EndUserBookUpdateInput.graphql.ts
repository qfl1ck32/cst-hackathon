export default /* GraphQL */ `
  input EndUserBookUpdateInput {
    bookId: ObjectId
    endUserId: ObjectId
    progress: Float
    tests: [EndUserBookTestInput]
  }

  input EndUserBookTestInput {
    chapter: String!
    isPassed: Boolean!
    numberOfTries: Int!
    testId: ObjectId!
  }
`;
