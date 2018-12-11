import React from 'react';
import './sass/App.scss';
import Navbar from './components/layout/Navbar';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h2>hello</h2>
      </div>
    </div>
  );
}
