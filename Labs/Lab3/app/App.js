
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, } from '@apollo/client';
import Navigator from './routes/homeStack';
//import { GITHUB_TOKEN } from '@env';

//Vill använda denna kod istället för att ej skriva ut personal TOKEN men @env funkar ej...
// const httpLink = createHttpLink({
//   uri: 'http://api.github.com/graphql'
// });

// const authLink = setContext((_, { headers }) => {
//   console.log('setContex' + GITHUB_TOKEN);
//   return {
//     headers: {
//       ...headers,
//       authorization: 'Bearer ${GITHUB_TOKEN}',
//     },
//   };
// });

const TOKEN = "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";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    authorization: `bearer ${TOKEN}`,
  },
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Navigator />
    </ApolloProvider>
  );
};

export default App;

