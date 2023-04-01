export default /* GraphQL */ `
  input BookInsertInput {
    author: String!
    chapters: [String]!
    genres: [String]!
    title: String!
  }
`;
