export default /* GraphQL */ `
  type EndUserBookTest {
    _id: ObjectId
    questions: [EndUserBookTestQuestion]!
  }

  type EndUserBookTestQuestion {
    text: String!
    type: EndUserBookTestQuestionType!
    choices: [String]
  }

  enum EndUserBookTestQuestionType {
    MULTIPLE_CHOICE
    BOOLEAN
    TEXT
  }
`;
