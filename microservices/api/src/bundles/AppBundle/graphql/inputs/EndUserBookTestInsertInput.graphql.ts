export default /* GraphQL */ `
  input EndUserBookTestInsertInput {
    questions: [EndUserBookTestQuestionInput]!
  }

  input EndUserBookTestQuestionInput {
    text: String!
    type: EndUserBookTestQuestionType!
  }
`;
