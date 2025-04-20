import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {mmkvStorage} from '../state/storage';
import {Platform} from 'react-native';
import {onError} from '@apollo/client/link/error';

const httpLink = createHttpLink({
  uri:
    Platform.OS === 'ios'
      ? 'http://localhost:3000/api/graphql'
      : 'http://10.0.2.2:3000/api/graphql',
});

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({message, locations, path}) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const authLink = setContext((_, {headers}) => {
  const token = mmkvStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const client = new ApolloClient({
  link: errorLink.concat(authLink).concat(httpLink),
  cache: new InMemoryCache(),
});
