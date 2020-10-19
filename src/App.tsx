import React from 'react';
import './App.css';
import {  } from '@material-ui/core';
import { Dropdown } from './Dropdown/Dropdown';
import { Output } from './Components//Output/Output';
import { Search } from './Components/Search/Search';
import { AddPerson } from './AddPerson/AddPerson';


function App() {
  return (
    <div className="grid-container">
      <div className="header grid-child"> <h1 > Finder </h1></div>
      <div className="search grid-child"><Search /></div>
      <div className="dropdown grid-child"><Dropdown/></div>
      <div className="output grid-child"><Output /></div>
      <div className="output grid-child"><AddPerson /></div>
    </div>
  );
}

export default App;
