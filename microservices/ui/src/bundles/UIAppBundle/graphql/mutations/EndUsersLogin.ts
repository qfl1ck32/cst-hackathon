import { gql } from "@apollo/client";

export default gql`
  mutation EndUsersLogin($input: EndUsersLoginInput!) {
    EndUsersLogin(input: $input)
  }
`;
