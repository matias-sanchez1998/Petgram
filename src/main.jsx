import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";

import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink, ApolloLink, concat } from "@apollo/client";
import Context from "./Context";

const httpLink = new HttpLink({ uri: "https://petgram-server-carlos-carlosdev88.vercel.app/graphql", })

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token')
  const authorization = token ? `Bearer ${token}` : ''
  operation.setContext({
    headers: {
      authorization
    }
  })

  return forward(operation)
})

const defaultOptions = {
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
  onError: (error) => {
    const { networkError } = error;
    if(networkError && networkError.result.code === 'invalid_token') {
      console.log('networkError', networkError)
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  },
  defaultOptions: defaultOptions,
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client={client}>
    <Context.Provider>
      <App />
    </Context.Provider>
  </ApolloProvider>);

