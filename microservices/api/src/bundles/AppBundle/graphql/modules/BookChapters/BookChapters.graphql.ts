export default /* GraphQL */ `
  type Query {
    BookChaptersFindOne(query: QueryInput): BookChapter
    BookChaptersFind(query: QueryInput): [BookChapter]!
    BookChaptersCount(query: QueryInput): Int!
  }

  type Mutation {
    BookChaptersInsertOne(document: BookChapterInsertInput!): BookChapter
    BookChaptersUpdateOne(
      _id: ObjectId!
      document: BookChapterUpdateInput!
    ): BookChapter!
    BookChaptersDeleteOne(_id: ObjectId!): Boolean
  }

  type Subscription {
    BookChaptersSubscription(body: EJSON): SubscriptionEvent
    BookChaptersSubscriptionCount(filters: EJSON): SubscriptionCountEvent
  }
`;
