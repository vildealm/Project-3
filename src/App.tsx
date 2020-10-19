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
      <div className="header"> <h1 > Finder </h1></div>
      <div className="grid-search"><Search /></div>
      <div className="grid-dropdown"><Dropdown/></div>
      <div className="grid-output"><Output /></div>
      <div className="grid-addPerson"><AddPerson /></div>
    </div>
  );
}

export default App;
