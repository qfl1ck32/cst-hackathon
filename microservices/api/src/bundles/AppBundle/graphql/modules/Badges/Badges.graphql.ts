export default /* GraphQL */ `
  type Query {
    BadgesFindOne(query: QueryInput): Badge
    BadgesFind(query: QueryInput): [Badge]!
    BadgesCount(query: QueryInput): Int!
  }

  type Mutation {
    BadgesInsertOne(document: BadgeInsertInput!): Badge
    BadgesUpdateOne(_id: ObjectId!, document: BadgeUpdateInput!): Badge!
    BadgesDeleteOne(_id: ObjectId!): Boolean
  }

  type Subscription {
    BadgesSubscription(body: EJSON): SubscriptionEvent
    BadgesSubscriptionCount(filters: EJSON): SubscriptionCountEvent
  }
`;
