import React from 'react';
import './sass/App.scss';
import Navbar from './components/layout/Navbar';
import Results from './components/Results';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Results />
    </div>
  );
}
