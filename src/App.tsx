import React, { useState, useEffect } from 'react';
import './App.css';
import { Dropdown } from './Dropdown/Dropdown';
import { Output } from './Components//Output/Output';
import { Search } from './Components/Search/Search';
import { AddPerson } from './AddPerson/AddPerson';
import Launcher from './Launcher';

const App = () => {
  return (
      <div className="grid-container">
         <div className="header"> <h1 style={{color: '#f56a79'}}> Finder </h1></div>
        <div className="grid-search"><Search/></div>
        <div className="grid-dropdown"><Dropdown/> </div>
        <div><Launcher/></div>
        <div className="grid-addPerson"><AddPerson/></div>
      </div>
  );
}
export default App;
//<div className = "grid-output"><Output/></div> 