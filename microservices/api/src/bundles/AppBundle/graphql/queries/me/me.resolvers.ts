import { ObjectId } from "@bluelibs/ejson";
import { IGraphQLContext, IResolverMap } from "@bluelibs/graphql-bundle";
import * as X from "@bluelibs/x-bundle";
import { UsersCollection } from "@bundles/AppBundle/collections";

export default {
  Query: {
    me: [
      X.CheckLoggedIn(),

      async (_: any, _2: any, ctx: IGraphQLContext, ast: any) => {
        const userId = ctx.userId;

        const usersCollection = ctx.container.get(UsersCollection);

        return usersCollection.queryOneGraphQL(ast, {
          filters: {
            _id: userId as any,
          },

          intersect: {
            _id: 1,

            email: 1,
            username: 1,

            roles: 1,
          },
        });
      },
    ],
  },
} as IResolverMap;
