import { gql } from "@apollo/client";

export default gql`
  mutation EndUsersSubmitTest($input: EndUsersSubmitTestInput!) {
    EndUsersSubmitTest(input: $input) {
      hasPassed
      score

      answers {
        question
        answer
        correct
        explanation
      }
    }
  }
`;
