import React from 'react';
import './sass/App.scss';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Results from './components/Results';
import About from './components/About';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});
export default function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Router>
        <div className="App">
          <Route exact path="/" component={Results} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    </ApolloProvider>
  );
}
