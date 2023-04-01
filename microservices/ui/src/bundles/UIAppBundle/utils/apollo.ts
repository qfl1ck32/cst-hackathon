import { ApolloError } from "@apollo/client";

export const extractError = (error: ApolloError) => {
  const gqlError = error.graphQLErrors?.[0];

  if (!gqlError) {
    return error.message;
  }

  return gqlError.message;
};
