import React from 'react';
import './App.css';
import { Dropdown } from './Dropdown/Dropdown';
import { Output } from './Components/List/Output/Output';
import { Search } from './Components/List/Search';
import {Provider} from 'react-redux'; 
import {store} from './store'; 

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
