import { gql } from "@apollo/client";

export default gql`
  mutation EndUsersRegister($input: EndUsersRegisterInput!) {
    EndUsersRegister(input: $input)
  }
`;
