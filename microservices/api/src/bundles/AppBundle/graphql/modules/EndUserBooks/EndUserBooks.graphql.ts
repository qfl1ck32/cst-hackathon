export default /* GraphQL */ `
  type Query {
    EndUserBooksFindOne(query: QueryInput): EndUserBook
    EndUserBooksFind(query: QueryInput): [EndUserBook]!
    EndUserBooksCount(query: QueryInput): Int!
  }

  type Mutation {
    EndUserBooksInsertOne(document: EndUserBookInsertInput!): EndUserBook
    EndUserBooksUpdateOne(
      _id: ObjectId!
      document: EndUserBookUpdateInput!
    ): EndUserBook!
    EndUserBooksDeleteOne(_id: ObjectId!): Boolean
  }

  type Subscription {
    EndUserBooksSubscription(body: EJSON): SubscriptionEvent
    EndUserBooksSubscriptionCount(filters: EJSON): SubscriptionCountEvent
  }
`;
