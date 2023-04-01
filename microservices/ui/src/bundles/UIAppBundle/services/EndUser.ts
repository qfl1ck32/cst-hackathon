import {
  EndUsersLoginInput,
  EndUsersLoginMutation,
  EndUsersRegisterInput,
  EndUsersRegisterMutation,
  EndUsersSearchBookInput,
  EndUsersSearchBookMutation,
} from "@app/graphql/generated/graphql";

import EndUsersLogin from "@app/graphql/mutations/EndUsersLogin";
import EndUsersRegister from "@app/graphql/mutations/EndUsersRegister";

import { Inject, Service } from "@bluelibs/core";
import { ApolloClient } from "@bluelibs/ui-apollo-bundle";
import { AppGuardian } from "@app/services/AppGuardian";
import EndUsersSearchBook from "@app/graphql/mutations/EndUsersSearchBook";

@Service()
export class EndUserService {
  @Inject(() => ApolloClient)
  private apolloClient!: ApolloClient;

  @Inject(() => AppGuardian)
  private appGuardian!: AppGuardian;

  async login(input: EndUsersLoginInput) {
    const response = await this.apolloClient.mutate<EndUsersLoginMutation, { input: EndUsersLoginInput }>({
      mutation: EndUsersLogin,

      variables: {
        input,
      },
    });

    const token = response.data?.EndUsersLogin as string;

    await this.appGuardian.storeToken(token);
  }

  async register(input: EndUsersRegisterInput) {
    await this.apolloClient.mutate<EndUsersRegisterMutation, { input: EndUsersRegisterInput }>({
      mutation: EndUsersRegister,

      variables: {
        input,
      },
    });
  }

  async searchBook(input: EndUsersSearchBookInput) {
    const response = await this.apolloClient.mutate<EndUsersSearchBookMutation, { input: EndUsersSearchBookInput }>({
      mutation: EndUsersSearchBook,

      variables: {
        input,
      },
    });

    return response.data?.EndUsersSearchBook;
  }
}
