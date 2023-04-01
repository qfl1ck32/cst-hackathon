import { EndUsersLoginInput, EndUsersLoginMutation, EndUsersRegisterInput, EndUsersRegisterMutation } from "@app/graphql/generated/graphql";
import endUsersLogin from "@app/graphql/mutations/endUsersLogin";
import endUsersRegister from "@app/graphql/mutations/endUsersRegister";
import { Inject, Service } from "@bluelibs/core";
import { ApolloClient } from "@bluelibs/ui-apollo-bundle";
import { AppGuardian } from "@app/services/AppGuardian";

@Service()
export class EndUserService {
  @Inject(() => ApolloClient)
  private apolloClient!: ApolloClient;

  @Inject(() => AppGuardian)
  private appGuardian!: AppGuardian;

  async login(input: EndUsersLoginInput) {
    const response = await this.apolloClient.mutate<EndUsersLoginMutation, { input: EndUsersLoginInput }>({
      mutation: endUsersLogin,

      variables: {
        input,
      },
    });

    const token = response.data?.EndUsersLogin as string;

    await this.appGuardian.storeToken(token);
  }

  async register(input: EndUsersRegisterInput) {
    await this.apolloClient.mutate<EndUsersRegisterMutation, { input: EndUsersRegisterInput }>({
      mutation: endUsersRegister,

      variables: {
        input,
      },
    });
  }
}
