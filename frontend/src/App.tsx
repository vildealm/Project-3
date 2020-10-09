import React from 'react';
import logo from './logo.svg';
import './App.css';
import "reflect-metadata"; 

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="pic-border">
          <h1> Hello World </h1>
        </div>
      </header>
    </div>
  );
}

export default App;
