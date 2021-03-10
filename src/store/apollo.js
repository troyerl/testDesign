import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import config from '../config';

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: config.SERVER_URL + `/graphql`,
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
    },
  },
});

export default apolloClient;