import React, { useState, useEffect } from 'react';
import './App.css';
import { Dropdown } from './Dropdown/Dropdown';
import { Output } from './Components//Output/Output';
import { Search } from './Components/Search/Search';
import { AddPerson } from './AddPerson/AddPerson';
import ApolloClient, { gql, InMemoryCache } from 'apollo-boost';
import {ApolloProvider, Query} from 'react-apollo';

 

function App()  { 

  
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',    
    cache: new InMemoryCache()

  })
 ;

  return (
    <ApolloProvider client={client}>
      <div className="grid-container">
         <div className = "header"> <h1 > Finder </h1></div>
        <div className = "search"><Search/></div>
        <div className ="dropdown">
         <Dropdown filter="City" options={["Trondheim", "Aveiro", "Washington"]}/>
        </div>
        <div className="output"><Output/></div>
        <div className = "addPerson"><AddPerson/></div>
      </div>
      </ApolloProvider>
  );
}

export default App;
//<div className = "grid-output"><Output/></div> 