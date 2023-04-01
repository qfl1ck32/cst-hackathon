export default /* GraphQL */ `
  type EndUsersSearchBookResponse {
    exists: Boolean!

    bookId: ObjectId
    title: String
    author: String
  }
`;
