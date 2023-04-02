import { gql } from "@apollo/client";

export default gql`
  query EndUsersGetBooks {
    EndUsersGetBooks {
      _id

      progress

      book {
        author
        title
      }
    }
  }
`;
