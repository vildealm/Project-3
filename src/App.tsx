import React from 'react';
import logo from './logo.svg';
import './App.css';
import { List } from './List/List';
import { Filter } from './Filter/Filter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> List of people </h1>
        <List/>
        <Filter/>
      </header>
    </div>
  );
}

export default App;
