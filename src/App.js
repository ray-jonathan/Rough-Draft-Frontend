import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import ExchangeRates from './ExchangeRates';
const BASE_URL = process.env.REACT_APP_BASE_URL;

const client = new ApolloClient({
  uri: BASE_URL,
});

export default () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 
        <span role="img" aria-label="jsxal1y/accessible-emoji" >🚀</span>
      </h2>
      <ExchangeRates />
    </div>
  </ApolloProvider>
);
