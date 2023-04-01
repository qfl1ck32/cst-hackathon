export default /* GraphQL */ `
  input EndUserInsertInput {
    badgesIds: [ObjectId]!
    experience: Int!
    gold: Int!
    level: Int!
    ownerId: ObjectId!
  }
`;
