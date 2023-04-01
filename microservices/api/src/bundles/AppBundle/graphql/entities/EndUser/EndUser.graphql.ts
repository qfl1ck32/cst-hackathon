export default /* GraphQL */ `
  type EndUser {
    _id: ObjectId
    badges: [Badge]!
    badgesIds: [ObjectId]!
    books: [EndUserBook]!
    experience: Int!
    gold: Int!
    level: Int!
    owner: User!
    ownerId: ObjectId!
  }
`;
