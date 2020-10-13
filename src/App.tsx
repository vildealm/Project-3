import React from 'react';
import './App.css';
import { List } from './Components/List/List';
import { Filter } from './Components/List/Filter/Filter';

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
