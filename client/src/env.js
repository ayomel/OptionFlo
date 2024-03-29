export const ENVIRONMENT = {
  STRIPE_PUBLISHABLE: process.env.REACT_APP_STRIPE_PUBLISHABLE,
  GRAPHQL_URL: process.env.REACT_APP_GRAPHQL_URL,
  DATA_SERVER_URL: process.env.REACT_APP_DATA_SERVER_URL,
  FIREBASE_INFO: {
    API: process.env.REACT_APP_FIREBASE_API,
    APP_ID: process.env.REACT_APP_FIREBASE_APP_ID,
    DB_URL: process.env.REACT_APP_FIREBASE_DB_URL,
    DOMAIN: process.env.REACT_APP_FIREBASE_DOMAIN_URL,
    SENDER_ID: process.env.REACT_APP_FIREBASE_SENDER_ID,
    MEASURE_ID: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  },
  CORS: process.env.REACT_APP_CORS,
}
