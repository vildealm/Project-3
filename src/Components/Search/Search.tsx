import React from 'react';
import './Search.css';
<<<<<<< HEAD
//import { Button } from '@material-ui/core';
=======
>>>>>>> 3426d3de95e93220e48adc82c9dce3234ff1a31d
//import SearchIcon from '@material-ui/icons/Search';

export const Search = () => {
  /*const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  
  const handleChange = (event:any) => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const results:any = people.filter(person =>
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  <ul>
        {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>*/
  return (
    <div>
      <div className="search-container">
        <input
          type = "text"
          className="search"
          placeholder = "Search ..."
          >
          </input>
      </div>
    </div>
  );
}

/* <input className="search" name="search" placeholder="Search.."></input>
      <button className="search_button">&#8594;</button>*/
