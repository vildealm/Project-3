import React from 'react';
import './App.css';
import { Filter } from './Components/Filter/Filter';
import { AddPerson } from './Components/AddPerson/AddPerson';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import {ApolloProvider} from 'react-apollo'; 

function App()  { 
  const client = new ApolloClient({
    uri: 'http://localhost:4000',    
    cache: new InMemoryCache()
  });
  
  return (
    <ApolloProvider client = {client}>
      <div className="grid-container">
         <div className = "header"> <h1 className="header"> Finder </h1></div>
        <div className ="filter">
         <Filter client = {client}/>
        </div>
        <div className = "addPerson"><AddPerson/></div>
      </div>
    </ApolloProvider>
  );
}
export default App;
