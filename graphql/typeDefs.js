const {gql} = require('apollo-server')

module.exports = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
    comments: [Comment!]!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
  }

  type Comment {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
  }

  type Like {
    id: ID!
    createdAt: String!
    username: String!
  }

  type User {
    id: ID!
    firebaseId: String!
    email: String!
    username: String!
    createdAt: String!
    type: String
    stripeId: String
    ccLast4: String
    admin: Boolean
  }

  input RegisterInput {
    uid: String!
  }

  input OptionFilterInput {
    date: OptionStringFilterInput
  }

  input OptionStringFilterInput {
    contains: String!
  }

  input OptionData {
    id: String!
    date: String!
    time: String!
    ticker: String!
    description: String!
    updated: String
    sentiment: String!
    aggressor_ind: String!
    option_symbol: String!
    underlying_type: String!
    cost_basis: String!
    put_call: String!
    size: String!
    strike_price: String!
    date_expiration: String!
    option_activity_type: String!
    trade_count: String!
    open_interest: String!
    volume: String!
    midpoint: String!
  }

  type Option {
    id: String!
    date: String!
    time: String!
    ticker: String!
    description: String!
    sentiment: String!
    aggressor_ind: String!
    option_symbol: String!
    underlying_type: String!
    cost_basis: String!
    put_call: String!
    strike_price: String!
    size: String!
    date_expiration: String!
    option_activity_type: String!
    trade_count: String!
    open_interest: String!
    volume: String!
    midpoint: String!
    updated: String
    option_id: String!
  }

  type Query {
    getPosts: [Post]
    getUser(userId: String!): User
    getPost(postId: ID!): Post
    getOptions: [Option]
    getAllUsers: [User]
    getOptionsByDate(date: String!): [Option]!
    getOptionsByTicker(ticker: String): [Option]!
    getOptionsByDateAndTicker(date: String, ticker: String): [Option]!
  }

  type Mutation {
    register(registerInput: RegisterInput): User!
    giveExistingUsersFirebaseId(email: String!, firebaseId: String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: String!, body: String): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
    createSubscription(
      source: String!
      ccLast4: String!
      subPlan: String!
    ): User
    createSubscriptionQuarterly(source: String!, ccLast4: String!): User
    createSubscriptionYearly(source: String!, ccLast4: String!): User
    changeCreditCard(source: String!, ccLast4: String!): User
    cancelSubscription: User
    saveOption(options: [OptionData]): [Option]!
    updateUserType(username: String): User!
  }

  type Subscription {
    newPost: Post!
    newOption: Option!
  }
`
