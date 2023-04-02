import {
  EndUsersAddBookToLibraryInput,
  EndUsersAddBookToLibraryMutation,
  EndUsersGenerateTestInput,
  EndUsersGenerateTestMutation,
  EndUsersLoginInput,
  EndUsersLoginMutation,
  EndUsersRegisterInput,
  EndUsersRegisterMutation,
  EndUsersSearchBookInput,
  EndUsersSearchBookMutation,
  EndUsersSubmitTestInput,
  EndUsersSubmitTestMutation,
} from "@app/graphql/generated/graphql";

import EndUsersLogin from "@app/graphql/mutations/EndUsersLogin";
import EndUsersRegister from "@app/graphql/mutations/EndUsersRegister";

import { Inject, Service } from "@bluelibs/core";
import { ApolloClient } from "@bluelibs/ui-apollo-bundle";
import { AppGuardian } from "@app/services/AppGuardian";
import EndUsersSearchBook from "@app/graphql/mutations/EndUsersSearchBook";
import EndUsersAddBookToLibrary from "@app/graphql/mutations/EndUsersAddBookToLibrary";
import EndUsersGenerateTest from "@app/graphql/mutations/EndUsersGenerateTest";
import EndUsersSubmitTest from "@app/graphql/mutations/EndUsersSubmitTest";

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

    await this.appGuardian.load();
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

  async addBookToLibrary(input: EndUsersAddBookToLibraryInput) {
    const response = await this.apolloClient.mutate<EndUsersAddBookToLibraryMutation, { input: EndUsersAddBookToLibraryInput }>({
      mutation: EndUsersAddBookToLibrary,

      variables: {
        input,
      },
    });

    return response.data?.EndUsersAddBookToLibrary;
  }

  async generateTest(input: EndUsersGenerateTestInput) {
    const response = await this.apolloClient.mutate<EndUsersGenerateTestMutation, { input: EndUsersGenerateTestInput }>({
      mutation: EndUsersGenerateTest,

      variables: {
        input,
      },
    });

    return response.data?.EndUsersGenerateTest;
  }

  async submitTest(input: EndUsersSubmitTestInput) {
    const response = await this.apolloClient.mutate<EndUsersSubmitTestMutation, { input: EndUsersSubmitTestInput }>({
      mutation: EndUsersSubmitTest,

      variables: {
        input,
      },
    });

    return response.data?.EndUsersSubmitTest;
  }
}
