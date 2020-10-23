import React, { useState, useEffect } from 'react';
import './App.css';
import { Dropdown } from './Dropdown/Dropdown';
import { Output } from './Components//Output/Output';
import { Search } from './Components/Search/Search';
import { AddPerson } from './AddPerson/AddPerson';
import Launcher from './Launcher';
import ApolloClient, { gql } from 'apollo-boost';
import {ApolloProvider, Query} from 'react-apollo';

 

function App()  { 

  const client = new ApolloClient({
    uri: 'http://localhost:4000/'
  })
 ;

  
  
 

  return (
    <ApolloProvider client={client}>
      <div className="grid-container">
         <div className = "header"> <h1 > Finder </h1></div>
        <div className = "grid-search"><Search/></div>
        <div className ="grid-dropdown">
         <Dropdown filter="City" options={["Trondheim", "Aveiro", "Washington"]}/>
         <Dropdown filter="Age" options={["20-22", "23-25", "26-28", "29-31", "32-34", "35-37", "38-40"]}/>
        </div>
        
        <div><Launcher/></div>
        <div className = "grid-addPerson"><AddPerson/></div>
      </div>
      </ApolloProvider>
  );
}

export default App;
//<div className = "grid-output"><Output/></div> 