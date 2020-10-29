/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import './Filter.css';
import { QueryResult, useLazyQuery } from 'react-apollo';
import gql from 'graphql-tag';
import { Description } from '@material-ui/icons';
import Person from '../Person/Person';


function setPerson(queryResult: QueryResult){

    let people : any = []; 
    let ids : any = [];
    let input : String; 

    let person = {
        id: Number,
        first_name: String,
        last_name: String,
        age: Number,
        location: String,
        description: String
    }
    if(queryResult.error){
        return <p>{queryResult.error}</p>;
    }
    
    if(queryResult.data !== undefined){
        if(queryResult.data.persons !== undefined){
            queryResult.data.persons.map(({id, first_name, last_name, age, location, description}: any) => {
                console.log(first_name, last_name);
                person.id= id;
                person.first_name = first_name;
                person.last_name = last_name;
                person.age = age;
                person.location = location;
                person.description = description;
                if(!ids.includes(person.id)){
                people.push(<Person first_name= {person.first_name} last_name = {person.last_name} location = {person.location} age= {person.age} description = {person.description}/>);
                ids.push(person.id);
                }
            });
        }
        else if(queryResult.data.filterSearch !== undefined){
            queryResult.data.filterSearch.map(({id, first_name, last_name, age, location, description}: any) => {
                console.log(first_name, last_name);
                person.id= id;
                person.first_name = first_name;
                person.last_name = last_name;
                person.age = age;
                person.location = location;
                person.description = description;
                if(!ids.includes(person.id)){
                people.push(<Person first_name= {person.first_name} last_name = {person.last_name} location = {person.location} age= {person.age} description = {person.description}/>);
                ids.push(person.id);
                }
            });
        }
        else{
            queryResult.data.nameSearch.map(({id, first_name, last_name, age, location, description}: any) => {
                console.log(first_name, last_name);
                person.id= id;
                person.first_name = first_name;
                person.last_name = last_name;
                person.age = age;
                person.location = location;
                person.description = description;
                if(!ids.includes(person.id)){
                people.push(<Person first_name= {person.first_name} last_name = {person.last_name} location = {person.location} age= {person.age} description = {person.description}/>);
                ids.push(person.id);
                }
            });
        }
    }
    return people;
}

const GET_ALL = gql`
    query persons( $orderBy: String!){
        persons(orderBy: $orderBy){
            id
            first_name
            last_name
            age
            location
            description
        }
    }
`;

const GET_PERSON = gql`
    query nameSearch($name: String!, $orderBy: String!){
        nameSearch(name: $name, orderBy: $orderBy){
            id
            first_name
            last_name
            age
            location
            description
        }
    }
`;

const FILTER_SEARCH = gql`
    query filterSearch($age: Int, $location: String, $orderBy: String!){
        filterSearch(filter: {age: $age, location: $location}, orderBy: $orderBy ){
            id
            first_name
            last_name
            age
            location
            description
        }
    }
`;

export function Filter() : any {
    const [activeFilter, setActiveFilter] = useState('getAll');
    const [name, setName] = useState('');
    const [locationOutput, setLocationOutput] = useState('Location');
    const [orderOutput, setOrderOutput] = useState('Alphabetical');
    const [orderBy, setOrderBy] = useState('first_name')
    const [age, setAge] = useState(0);
    const [location, setLocation] = useState('any');
    
    const checkStatus = (filter: String) => {
        if(filter ===  "getAll"){
            return allResults;
        }
        else if(filter === "nameSearch"){
            return nameResults;
        }
        else{
            return filterResults;
        }
    }

    const [persons, allResults] = useLazyQuery(
        GET_ALL,
        { variables: { orderBy: orderBy } }
    );
    const [searchName, nameResults] = useLazyQuery(
        GET_PERSON,
        { variables: { name: name, orderBy: orderBy } }
    );
    const [filterSearch, filterResults] = useLazyQuery(
        FILTER_SEARCH,
        { variables: { age: age, location: location, orderBy: orderBy} });
    
    useEffect(() => {
        persons();
        }, []);

    console.log(filterResults.data);
    console.log(nameResults.data);
    console.log(allResults.data);

    return (
        <div>  
            <div className="search-container">
                <form onSubmit={(event) => {
                    event.preventDefault();
                    let name : HTMLInputElement = document.getElementById("nameSearch") as HTMLInputElement;
                    setName(name.value);
                    searchName();
                    setActiveFilter('nameSearch');
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
                    setActiveFilter('filters');
                    filterSearch();}}>
                    <label className = "age-label" > Age: </label>
                    <input className = "age" type="number" id="number" min="0" max="100"></input>
                    <button type="submit" className = "age-button" > &rarr;</button>
                </form>
            </div>      


            <div className="dropdown-location">
                <button className="dropbtn">{locationOutput} ▼</button>
                <div className="dropdownContent">
                    <a onClick={()=> {setLocation("any");setLocationOutput("Location");filterSearch();setActiveFilter('filters');}}>Any</a>
                    <a onClick={()=> {setLocation("Trondheim");setLocationOutput("Trondheim");filterSearch();setActiveFilter('filters');}}>Trondheim</a>
                    <a onClick={()=> {setLocation("Torino");setLocationOutput("Torino");filterSearch();setActiveFilter('filters');}}>Torino</a>
                    <a onClick={()=> {setLocation("Oslo");setLocationOutput("Oslo");filterSearch();setActiveFilter('filters');}}>Oslo</a>
                    <a onClick={()=> {setLocation("Washington");setLocationOutput("Washington");filterSearch();setActiveFilter('filters');}}>Washington</a>
                </div>
            </div>
            <div className="dropdown-sorting">
                <button className="dropbtn">{orderOutput} ▼</button>
                <div className="dropdownContent">
                    <a onClick={()=> {setOrderBy("first_name");setOrderOutput("Alphabetical");}}>Alphabetical</a>
                    <a onClick={()=> {setOrderBy("age");setOrderOutput("Age");}}>Age</a>
                </div>
            </div>
            <div>
                {setPerson(checkStatus(activeFilter))}
            </div>
        </div> 
    );
}
