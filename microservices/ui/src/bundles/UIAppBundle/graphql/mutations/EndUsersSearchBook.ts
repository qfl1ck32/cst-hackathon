import { gql } from "@apollo/client";

export default gql`
  mutation EndUsersSearchBook($input: EndUsersSearchBookInput!) {
    EndUsersSearchBook(input: $input) {
      bookId
      exists
      title
      author
    }
  }
`;
