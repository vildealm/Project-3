import React from 'react';
import './App.css';
import { Dropdown } from './Dropdown/Dropdown';
import { Output } from './Components/List/Output/Output';
import { Search } from './Components/List/Search';
import { AddPerson } from './AddPerson/AddPerson';

function App() {
  return (
    <div className="grid-container">

      <div className="header"> <h1 > Finder </h1></div>
      <div className="grid-search"><Search /></div>
      <div className="grid-dropdown">
        <Dropdown filter="Sortering" options={["Alfabetisk", "Nyeste", "Eldste"]} />
        <Dropdown filter="City" options={["Trondheim", "Aveiro", "Washington"]} />
        <Dropdown filter="Age" options={["20-22", "23-25", "26-28", "29-31", "32-34", "35-37", "38-40"]} />
      </div>
      <div className="grid-output"><Output /></div>
      <div className="grid-addPerson"><AddPerson /></div>
    </div>
  );
}

export default App;
