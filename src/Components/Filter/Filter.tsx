import React from 'react';
import './Filter.css';
import { Query, QueryResult } from 'react-apollo';
import gql from 'graphql-tag';


//dette er den valgte alderen det skal filtreres på
let ageFilter; 
let locationFilter : any; 
let searchFilter : any; 

function submitAgeFilter(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    let inputElement: HTMLInputElement = document.getElementById('number') as HTMLInputElement;
    let value: string = inputElement.value;
    ageFilter = parseInt(value);
    console.log(ageFilter)
}

function submitLocationFilter(location : string ) : any {
    locationFilter = location;
    console.log(locationFilter);
}

function submitSearchFilter( event: React.FormEvent<HTMLFormElement>) : any {
    event.preventDefault();
    let searchElement: HTMLInputElement = document.getElementById("search") as HTMLInputElement;
    searchFilter = searchElement.value;
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
                <form onSubmit= {submitSearchFilter}>
                    <input id="search" type = "text" className="search" placeholder = "Search ..."/>
                    <input type="submit" className="search-button" value="Go" />
                </form>
            </div>    
            <div className = "dropdown-age">
                <form onSubmit={submitAgeFilter}>
                    <label className = "age-label" > Age: </label>
                    <input className = "age" type="number" id="number" min="1" max="100"  ></input>
                    <button type="submit" className = "age-button" > &rarr;</button>
                </form>
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
