import { gql } from "@apollo/client";

export default gql`
  mutation EndUsersSearchBook($input: EndUsersSearchBookInput!) {
    EndUsersSearchBook(input: $input) {
      exists
      title
      author
    }
  }
`;
