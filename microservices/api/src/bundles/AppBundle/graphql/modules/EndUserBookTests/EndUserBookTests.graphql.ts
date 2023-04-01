export default /* GraphQL */ `
  type Query {
    EndUserBookTestsFindOne(query: QueryInput): EndUserBookTest
    EndUserBookTestsFind(query: QueryInput): [EndUserBookTest]!
    EndUserBookTestsCount(query: QueryInput): Int!
  }

  type Mutation {
    EndUserBookTestsInsertOne(
      document: EndUserBookTestInsertInput!
    ): EndUserBookTest
    EndUserBookTestsUpdateOne(
      _id: ObjectId!
      document: EndUserBookTestUpdateInput!
    ): EndUserBookTest!
    EndUserBookTestsDeleteOne(_id: ObjectId!): Boolean
  }

  type Subscription {
    EndUserBookTestsSubscription(body: EJSON): SubscriptionEvent
    EndUserBookTestsSubscriptionCount(filters: EJSON): SubscriptionCountEvent
  }
`;
