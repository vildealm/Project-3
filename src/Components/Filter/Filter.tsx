import React from 'react';
import './Filter.css';
import { Query, QueryResult } from 'react-apollo';
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

const nameSearch = (name: string) => (
    <Query query={gql`
        {
          nameSearch(name: $name){
            id
            first_name
            last_name
            location
            age
            description
          }
        }
    `}>
      {(result: QueryResult) => {
        
        if (result.loading) {
          console.log("loading");
          return <p>Loading </p>;
        }
        if (result.error) {
          console.log("error");
    
          return <p>{`${result.error}`} </p>;
        }
  
        return result.data.nameSearch.map(({first_name, last_name, location, age, description}:any) => (
            console.log(first_name, last_name, age, location, description)
        ));}}
    </Query>
   );

export function Filter() : any {
    
    return (
        <div>  
  
            <div className="search-container">
                <form onSubmit={(event) => {
                    event.preventDefault();
                    nameSearch('oe');
                    }}>
                    <input type = "text" className="search" placeholder = "Search ..."></input>
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
