export default /* GraphQL */ `
  type Book {
    _id: ObjectId
    author: String!
    chapters: [BookChapter]!
    genres: [String]!
    title: String!
  }
`;
