export default /* GraphQL */ `
  input EndUsersSubmitTestInput {
    chapterId: ObjectId!
    endUserBookId: ObjectId!
    answers: [String]!
  }
`;
