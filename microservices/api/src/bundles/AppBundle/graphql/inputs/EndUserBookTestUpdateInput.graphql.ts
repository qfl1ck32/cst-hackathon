export default /* GraphQL */ `
  input EndUserBookTestUpdateInput {
    questions: [EndUserBookTestQuestionInput]
  }

  input EndUserBookTestQuestionInput {
    text: String!
    type: EndUserBookTestQuestionType!
    choices: [String]
  }
`;
