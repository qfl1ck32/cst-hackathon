import { gql } from "@apollo/client";

export default gql`
  query EndUsersGetChapterTest($input: EndUsersGetChapterTestInput!) {
    EndUsersGetChapterTest(input: $input) {
      text
      type
      choices
    }
  }
`;
