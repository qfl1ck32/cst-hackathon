export default /* GraphQL */ `
  type EndUserBookTest {
    _id: ObjectId
    questions: [EndUserBookTestQuestion]!
  }

  type EndUserBookTestQuestion {
    text: String!
    type: EndUserBookTestQuestionType!
  }

  enum EndUserBookTestQuestionType {
    MULTIPLE_CHOICE
    BOOLEAN
    TEXT
  }
`;
