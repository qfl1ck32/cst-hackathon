export default /* GraphQL */ `
  type EndUserBook {
    _id: ObjectId
    book: Book!
    bookId: ObjectId!
    endUser: EndUser!
    endUserId: ObjectId!
    progress: Float!
    tests: [EndUserBookTest]!
  }

  type EndUserBookTest {
    chapter: String!
    isPassed: Boolean!
    numberOfTries: Int!
    testId: ObjectId!
  }
`;
