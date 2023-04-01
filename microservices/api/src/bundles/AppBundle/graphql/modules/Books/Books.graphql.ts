export default /* GraphQL */ `
  type Query {
    BooksFindOne(query: QueryInput): Book
    BooksFind(query: QueryInput): [Book]!
    BooksCount(query: QueryInput): Int!
  }

  type Mutation {
    BooksInsertOne(document: BookInsertInput!): Book
    BooksUpdateOne(_id: ObjectId!, document: BookUpdateInput!): Book!
    BooksDeleteOne(_id: ObjectId!): Boolean
  }

  type Subscription {
    BooksSubscription(body: EJSON): SubscriptionEvent
    BooksSubscriptionCount(filters: EJSON): SubscriptionCountEvent
  }
`;
