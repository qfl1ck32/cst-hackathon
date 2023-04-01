export default /* GraphQL */ `
  input EndUserBookInsertInput {
    bookId: ObjectId!
    endUserId: ObjectId!
    progress: Float!
    tests: [EndUserBookTestInput]!
  }

  input EndUserBookTestInput {
    chapter: Int!
    numberOfTries: Int!
    isPassed: Boolean!
  }
`;
