import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

/* Optional
import { setContext } from '@apollo/client/link/context';
*/

// Create an HTTP link to the GraphQL server
const httpLink = createHttpLink({
  uri: 'http://localhost:1337/graphql', // Replace with your GraphQL server URI
});

/* Optional
// Optional: Set up authentication headers (if needed)
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('auth-token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
*/

// Create Apollo Client instance
const ClientApollo = new ApolloClient({
  /* Optional
  link: authLink.concat(httpLink), // Combine authLink and httpLink
  */
  link: httpLink,
  cache: new InMemoryCache(),
});

export default ClientApollo;
