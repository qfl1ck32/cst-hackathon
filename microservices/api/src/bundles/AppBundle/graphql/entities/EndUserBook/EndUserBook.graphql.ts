export default /* GraphQL */ `
  type EndUserBook {
    _id: ObjectId
    book: Book!
    bookId: ObjectId!
    chaptersTests: [EndUserBookChaptersTest]!
    endUser: EndUser!
    endUserId: ObjectId!
    progress: Float!
  }

  type EndUserBookChaptersTest {
    chapterId: ObjectId!
    isPassed: Boolean!
    score: Int!
    numberOfTries: Int!
    testId: ObjectId!
  }
`;
