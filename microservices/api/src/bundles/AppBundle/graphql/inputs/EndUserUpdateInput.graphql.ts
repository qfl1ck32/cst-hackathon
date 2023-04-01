export default /* GraphQL */ `
  input EndUserUpdateInput {
    badgesId: ObjectId
    booksId: ObjectId
    experience: Int
    fullName: String
    gold: Int
    level: Int
    ownerId: ObjectId
  }
`;
