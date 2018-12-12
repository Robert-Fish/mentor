import React from 'react';
import './sass/App.scss';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Navbar from './components/layout/Navbar';
import Results from './components/Results';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});
export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Navbar />

        <Results />
      </div>
    </ApolloProvider>
  );
}
