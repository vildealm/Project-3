import React from 'react';
import './Search.css';
import { TextField, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

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
        <TextField
          className="search"
          label="Search"
          variant="outlined"
          style={{ backgroundColor: 'white', width: '80vh' }}>
          Search...</TextField>
        <Button
          className="search-button1"
          style={{ backgroundColor: '#d2d3c9', borderRadius: '40%', margin: '5px 10px' }}>
          <SearchIcon />
        </Button>
      </div>
    </div>
  );
}

/* <input className="search" name="search" placeholder="Search.."></input>
      <button className="search_button">&#8594;</button>*/
