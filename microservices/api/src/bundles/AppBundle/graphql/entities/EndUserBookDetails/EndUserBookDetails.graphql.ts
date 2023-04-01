export default /* GraphQL */ `
  type EndUserBookDetails {
    progress: Float!
    chapters: [EndUserBookChapterDetails!]!
    title: String!
    author: String!
  }

  type EndUserBookChapterDetails {
    _id: ObjectId!

    title: String!
    isPassed: Boolean!
    score: Int
    numberOfTries: Int!
  }
`;
