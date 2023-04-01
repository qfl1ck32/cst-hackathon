import { gql } from "@apollo/client";

export default gql`
  mutation EndUsersAddBookToLibrary($input: EndUsersAddBookToLibraryInput!) {
    EndUsersAddBookToLibrary(input: $input)
  }
`;
