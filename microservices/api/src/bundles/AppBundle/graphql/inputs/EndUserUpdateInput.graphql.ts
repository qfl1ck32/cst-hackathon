export default /* GraphQL */ `
  input EndUserUpdateInput {
    badgesIds: [ObjectId]
    experience: Int
    gold: Int
    level: Int
    ownerId: ObjectId
  }
`;
