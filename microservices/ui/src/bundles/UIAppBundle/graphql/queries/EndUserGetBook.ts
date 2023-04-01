import { gql } from "@apollo/client";

export default gql`
  query EndUserGetBook($input: EndUsersGetBookInput!) {
    EndUsersGetBook(input: $input) {
      progress

      title
      author

      chapters {
        title

        isPassed
        numberOfTries
      }
    }
  }
`;
