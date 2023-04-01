export default /* GraphQL */ `
  type EndUserBook {
    _id: ObjectId
    book: Book!
    bookId: ObjectId!
    chapterTests: [EndUserBookChapterTest]!
    endUser: EndUser!
    endUserId: ObjectId!
    progress: Float!
  }

  type EndUserBookChapterTest {
    chapter: String!
    isPassed: Boolean!
    numberOfTries: Int!
    testId: ObjectId!
  }
`;
