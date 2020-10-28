/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './Filter.css';
import { useLazyQuery } from 'react-apollo';
import gql from 'graphql-tag';


//dette er den valgte alderen det skal filtreres på
/*let ageFilter; 
let locationFilter : any; 
let searchFilter : any; 

function submitAgeFilter(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    let inputElement: HTMLInputElement = document.getElementById('number') as HTMLInputElement;
    let value: string = inputElement.value;
    ageFilter = parseInt(value);
}

function submitLocationFilter(location : string ) : any {
    /*locationFilter = location;
    const [age, setAge] = useState(0);
    const [location, setLocation] = useState('');
    const { loading, data, error } = useQuery(
        FILTER_SEARCH,
        { variables: { age: age, location: location } }
    );
}

function SearchFilter( name: String) : any {
    
}*/

const GET_PERSON = gql`
    query nameSearch($name: String!){
        nameSearch(name: $name){
            first_name
            last_name
            age
            location
            description
        }
    }
`;

const FILTER_SEARCH = gql`
    query filterSearch($age: Int, $location: String){
        filterSearch(filter: {age: $age, location: $location} ){
            first_name
            last_name
            age
            location
            description
        }
    }
`;

export function Filter() : any {
    const [name, setName] = useState('');
    const[locationOutput, setLocationOutput] = useState('Location');
    const[sortOutput, setSortOutput] = useState('Sort by');
    const[sort, setSort] = useState('any');
    
    const [searchName, nameResults] = useLazyQuery(
        GET_PERSON,
        { variables: { name: name } }
    );

    const [age, setAge] = useState(0);
    const [location, setLocation] = useState('any');
    const [filterSearch, filterResults] = useLazyQuery(
        FILTER_SEARCH,
        { variables: { age: age, location: location} });
    console.log(filterResults.data);
    console.log(nameResults.data);
    return (
        <div>  
            <div className="search-container">
                <form onSubmit={(event) => {
                    event.preventDefault();
                    let name : HTMLInputElement = document.getElementById("nameSearch") as HTMLInputElement;
                    setName(name.value);
                    searchName();
                    }}>
                    <input type = "text" id="nameSearch" className="search" placeholder = "Search ..."></input>
                    <button type="submit">Search</button>
                </form>
            </div>    
            <div className = "dropdown-age">
                <form onSubmit={(event) => {
                    event.preventDefault();
                    let inputAge : HTMLInputElement = document.getElementById("number") as HTMLInputElement;
                    if(inputAge.value === ''){
                        setAge(0);
                    }
                    else{
                        setAge(parseInt(inputAge.value));
                    }
                    filterSearch();}}>
                    <label className = "age-label" > Age: </label>
                    <input className = "age" type="number" id="number" min="0" max="100"></input>
                    <button type="submit" className = "age-button" > &rarr;</button>
                </form>
            </div>      


            <div className="dropdown-location">
                <button className="dropbtn">{locationOutput} ▼</button>
                <div className="dropdownContent">
                    <a onClick={()=> {setLocation("any");setLocationOutput("Location");filterSearch();}}>Any</a>
                    <a onClick={()=> {setLocation("Trondheim");setLocationOutput("Trondheim");filterSearch();}}>Trondheim</a>
                    <a onClick={()=> {setLocation("Torino");setLocationOutput("Torino");filterSearch();}}>Torino</a>
                    <a onClick={()=> {setLocation("Oslo");setLocationOutput("Oslo");filterSearch();}}>Oslo</a>
                    <a onClick={()=> {setLocation("Washington");setLocationOutput("Washington");filterSearch();}}>Washington</a>
                </div>
            </div>
            <div className="dropdown-sorting">
                <button className="dropbtn">{sortOutput} ▼</button>
                <div className="dropdownContent">
                    <a onClick={()=> {setSort("any");setSortOutput("Sort by");filterSearch();}}>Any</a>
                    <a onClick={()=> {setSort("alphabetical");setSortOutput("Alphabetical");filterSearch();}}>Alphabetical</a>
                    <a onClick={()=> {setSort("age");setSortOutput("Age");filterSearch();}}>Age</a>
                </div>

            </div>
        </div> 
    );
}
