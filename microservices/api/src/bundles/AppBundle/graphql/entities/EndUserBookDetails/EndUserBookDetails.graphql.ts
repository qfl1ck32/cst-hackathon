export default /* GraphQL */ `
  type EndUserBookDetails {
    progress: Float!
    chapters: [EndUserBookChapterDetails!]!
    title: String!
    author: String!
  }

  type EndUserBookChapterDetails {
    title: String!
    isPassed: Boolean!
    numberOfTries: Int!
  }
`;
