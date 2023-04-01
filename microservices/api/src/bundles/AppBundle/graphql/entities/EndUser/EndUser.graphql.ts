export default /* GraphQL */ `
  type EndUser {
    _id: ObjectId
    badges: Badge!
    badgesId: ObjectId!
    books: EndUserBook!
    booksId: ObjectId!
    experience: Int!
    fullName: String!
    gold: Int!
    level: Int!
    owner: User!
    ownerId: ObjectId!
  }
`;
