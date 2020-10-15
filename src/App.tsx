import React from 'react';
import './App.css';
import { Dropdown } from './Dropdown/Dropdown';
import { Output } from './Components/List/Output/Output';
import { Search } from './Components/List/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Finder </h1>
        <Search/>
        <Dropdown filter="City" options={["Trondheim", "Aveiro", "Washington"]}/>
        <Dropdown filter="Age" options={["16-20", "21-25", "26-30", "30-35", "36-40"]}/>
        <Output/>
        
      </header>
    </div>
  );
}

export default App;
