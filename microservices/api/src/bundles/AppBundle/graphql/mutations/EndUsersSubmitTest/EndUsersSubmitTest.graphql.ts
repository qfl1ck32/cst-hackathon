export default /* GraphQL */ `
  type Mutation {
    EndUsersSubmitTest(
      input: EndUsersSubmitTestInput!
    ): EndUsersSubmitTestResponse!
  }

  type EndUsersSubmitTestResponse {
    hasPassed: Boolean!
    attempts: Int!
    score: Int!
    answers: [EndUsersSubmitTestResponseAnswer!]!
  }

  type EndUsersSubmitTestResponseAnswer {
    question: String!
    answer: String!
    correct: Boolean!
    explanation: String
  }
`;
