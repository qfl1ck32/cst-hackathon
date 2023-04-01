import { gql } from "@apollo/client";

export default gql`
  mutation EndUsersGenerateTest($input: EndUsersGenerateTestInput!) {
    EndUsersGenerateTest(input: $input)
  }
`;
