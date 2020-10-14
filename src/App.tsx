import React from 'react';
import './App.css';
import { Dropdown } from './Dropdown/Dropdown';
import { Output } from './Components/List/Output/Output';
import { Search } from './Components/List/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Visage Lexicon </h1>
        <Search/>
        <Dropdown/>
        <Output/>
        
      </header>
    </div>
  );
}

export default App;
