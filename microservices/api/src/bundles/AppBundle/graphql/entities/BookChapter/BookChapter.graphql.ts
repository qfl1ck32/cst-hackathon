export default /* GraphQL */ `
  type BookChapter {
    _id: ObjectId
    book: Book!
    bookId: ObjectId!
    title: String!
  }
`;
