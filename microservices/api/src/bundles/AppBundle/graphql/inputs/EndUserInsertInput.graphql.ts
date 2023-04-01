export default /* GraphQL */ `
  input EndUserInsertInput {
    badgesId: ObjectId!
    booksId: ObjectId!
    experience: Int!
    fullName: String!
    gold: Int!
    level: Int!
    ownerId: ObjectId!
  }
`;
