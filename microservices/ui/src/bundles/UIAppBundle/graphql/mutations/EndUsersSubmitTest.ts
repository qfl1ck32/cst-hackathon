import { gql } from "@apollo/client";

export default gql`
  mutation EndUsersSubmitTest($input: EndUsersSubmitTestInput!) {
    EndUsersSubmitTest(input: $input)
  }
`;
