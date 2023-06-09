/**
 * We customize the Guardian mostly because we have different models of Users, we fetch different data from server than the default and we
 * register them in different ways.
 *
 * Use the `useAppGuardian()` function instead of `useGuardian()`
 */
import { GuardianSmart, GuardianUserType, GuardianUserRegistrationType, useSmart } from "@bluelibs/x-ui-next";
import { gql } from "@apollo/client";
import { User } from "@app/graphql/generated/graphql";

type AppUserType = GuardianUserType &
  User & {
    fullName: string;
  };

type AppRegisterType = GuardianUserRegistrationType;

export class AppGuardian extends GuardianSmart<AppUserType, AppRegisterType> {
  public async retrieveUser(): Promise<AppUserType> {
    return this.apolloClient
      .query({
        query: gql`
          query me {
            me {
              _id
              username
              email
              roles

              endUser {
                experience
                level
              }
            }
          }
        `,
        fetchPolicy: "network-only",
      })
      .then((response) => {
        return response.data.me;
      });
  }

  public async load() {
    super.load();
  }
}

/**
 * Use this instead `useGuardian()`
 * @returns
 */
export function useAppGuardian(): AppGuardian {
  return useSmart(AppGuardian);
}
