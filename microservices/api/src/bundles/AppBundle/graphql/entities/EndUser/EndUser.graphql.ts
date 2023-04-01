export default /* GraphQL */ `
  type EndUser {
    _id: ObjectId
    badges: Badge!
    badgesId: ObjectId!
    books: [EndUserBook]!
    experience: Int!
    fullName: String!
    gold: Int!
    level: Int!
    owner: User!
    ownerId: ObjectId!
  }
`;
