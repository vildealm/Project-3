import React, { useState } from 'react';
import './Search.css';
//import SearchIcon from '@material-ui/icons/Search';
import { useQuery, gql } from '@apollo/client';

interface Person {
  id: number;
  first_name: string;
  last_name: string;
  age: number;
  location: string;
  description: string; 
}

interface PersonData {
  persons: Person[];
}

interface PersonName {
  name: string;
}

const GET_PERSON = gql`
  query nameSearch($name: String!) {
    persons(name: $name) {
      id
      first_name
      last_name
      location
      age
      description
    }
  }
`;

/*function QuerySearch(name: string){
  const { loading, error, data } = useQuery(GET_PERSON, {
    variables: { name },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <div>{console.log(data.person.first_name)} {console.log("searching")} </div>
  );
}*/

export function Search() {
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
  //const [name, setName] = useState('');
  const { loading, data } = useQuery<PersonData, PersonName>(
    GET_PERSON,
    { variables: { name: 'oe' } }
  );
  return (
    <div>
      <div className="search-container">
        <form onSubmit={ (event => {
          event.preventDefault();
          //setName(document.getElementById("nameSearch")?.innerHTML!);
          //QuerySearch(name);
        })}>
          <input type = "text" id="nameSearch" className="search" placeholder = "Search ..." required></input>
          <button type="submit">Search</button>
        </form>
        <div>
          <h3>People</h3>
          {loading ? (
            <p>Loading ...</p>
          ) : (
            <div>
              {data && data.persons.map(({people} : any) => (
              <p>{people}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* <input className="search" name="search" placeholder="Search.."></input>
      <button className="search_button">&#8594;</button>*/
