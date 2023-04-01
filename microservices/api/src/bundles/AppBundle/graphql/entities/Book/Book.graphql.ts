export default /* GraphQL */ `
  type Book {
    _id: ObjectId
    author: String!
    chapters: [String]!
    genres: [String]!
    title: String!
  }
`;
