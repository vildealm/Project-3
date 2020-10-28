import React from 'react';
import './Filter.css';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';


//dette er den valgte alderen det skal filtreres på
let ageFilter; 
let locationFilter : any; 

function submitAgeFilter(){
    let inputElement: HTMLInputElement = document.getElementById('number') as HTMLInputElement;
    let value: string = inputElement.value;
    ageFilter = parseInt(value);
}

function submitLocationFilter(location : string ) : any {
    locationFilter = location;
    
}

const GET_PERSON = gql`
    query nameSearch($name: String!){
        nameSearch(name: $name){
            first_name
            last_name
            location
            description
        }
    }
`;

interface Person {
    id: number;
    first_name: string;
    last_name: string;
    age: number;
    location: string;
    description: string;
  }
  
interface Persons {
    rocketInventory: Person[];
}

interface PersonName {
    name: string;
}

/*function FindPeople(searchedName: String) {
    const { loading, data, error } = useQuery(
        GET_PERSON,
        { variables: { name: searchedName } }
    );
    if(loading){console.log("loading")};
    if(error){console.log(error)};
    console.log(data);
    return (
      <div></div>)  
}*/

export function Filter() : any {
    const { loading, data, error } = useQuery(
        GET_PERSON,
        { variables: { name: "oe" } }
    );
    if(loading){console.log("loading")};
    if(error){console.log(error)};
    console.log(data);
    return (
        <div>  
            <div className="search-container">
                <form onSubmit={(event) => {
                    event.preventDefault();
                    let name : HTMLInputElement = document.getElementById("nameSearch") as HTMLInputElement;
                    //FindPeople(name.value);
                    }}>
                    <input type = "text" id="nameSearch" className="search" placeholder = "Search ..."></input>
                    <button type="submit">Search</button>
                </form>
            </div>    
            <div className = "dropdown-age">
                <label className = "age-label" > Age: </label>
                <input className = "age" type="number" id="number" min="1" max="100"  ></input>
                <button className = "age-button" onClick={submitAgeFilter}> &rarr;</button>
                
            </div>      

            <div className="dropdown-location">
                <button className="dropbtn">Location ▼</button>
                <div className="dropdownContent">
                    <a onClick={submitLocationFilter("Trondheim")}>Trondheim</a>
                    <a onClick={submitLocationFilter("Torino")}>Torino</a>
                    <a onClick={submitLocationFilter("Oslo")}>Oslo</a>
                    <a onClick={submitLocationFilter("Washington")}>Washington</a>
                </div>
            </div>
            <div className="dropdown-sorting">
                <button className="dropbtn">Sort by ▼</button>
                <div className="dropdownContent">
                    <a>Alphabetical</a>
                    <a>Age</a>
                </div>

            </div>
        </div> 
    );
}
