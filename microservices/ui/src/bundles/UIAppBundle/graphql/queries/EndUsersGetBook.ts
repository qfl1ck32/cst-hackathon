import { gql } from "@apollo/client";

export default gql`
  query EndUsersGetBook($input: EndUsersGetBookInput!) {
    EndUsersGetBook(input: $input) {
      progress

      title
      author

      chapters {
        _id

        title

        isPassed
        score
        numberOfTries
      }
    }
  }
`;
