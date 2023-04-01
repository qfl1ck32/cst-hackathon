export default /* GraphQL */ `
  input EndUserBookUpdateInput {
    bookId: ObjectId
    endUserId: ObjectId
    progress: Float
    tests: [EndUserBookTestInput]
  }

  input EndUserBookTestInput {
    chapter: Int!
    numberOfTries: Int!
    isPassed: Boolean!
  }
`;
