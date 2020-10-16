import React from 'react';
import './App.css';
import { Dropdown } from './Dropdown/Dropdown';
import { Output } from './Components/List/Output/Output';
import { Search } from './Components/List/Search';
import {PersonState} from './reducers/reducer'; 


function App() {
  const persons = useSelector<PersonState, PersonState[""]>(); 
  return (
    <div className="App">
      <header className="App-header">
        <h1> Visage Lexicon </h1>
        <Search/>
        <Dropdown/>
        <ul>
          {persons}
        </ul>
        <Output/>
        
      </header>
    </div>
  );
}

export default App;
