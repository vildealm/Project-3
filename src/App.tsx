import React from 'react';
import './App.css';
import { Dropdown } from './Dropdown/Dropdown';
import { Output } from './Components/List/Output/Output';
import { Search } from './Components/List/Search';
import { PersonState } from './reducers/reducer';
import { success, failure, begin, searchValue } from './actions/action';

const PERSON_API_URL = ``;


const App = (props) => {
  const fetchUrl = (url) => {
    props.begin();
    fetch(url)
      .then(response => response.json())
      .then(jsonResponse => {
        props.success(jsonResponse.docs);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> Visage Lexicon </h1>
        <Search />
        <Dropdown 
          loading={props.loading}
          movies={props.movies}
          errorMessage={props.errorMessage}
          />
        <Output />

      </header>
    </div>
  );
}

export default App;
