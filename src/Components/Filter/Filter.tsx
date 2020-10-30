/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import './Filter.css';
import { QueryResult, useApolloClient, useLazyQuery } from 'react-apollo';
import gql from 'graphql-tag';
import Person from '../Person/Person';

let personCount : any ;



function setPerson(queryResult: QueryResult){

    let people : any = []; 
    let ids : any = [];

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
    personCount = people.length;
    return people;
    
    
}

const GET_ALL = gql`
    query persons( $orderBy: String!, $pageNumber: Int!){
        persons(orderBy: $orderBy, pageNumber: $pageNumber){
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
    query nameSearch($name: String!, $orderBy: String!, $pageNumber: Int!){
        nameSearch(name: $name, orderBy: $orderBy, pageNumber: $pageNumber){
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
    query filterSearch($age: Int, $location: String, $orderBy: String!, $pageNumber: Int!){
        filterSearch(filter: {age: $age, location: $location}, orderBy: $orderBy, pageNumber: $pageNumber){
            id
            first_name
            last_name
            age
            location
            description
        }
    }
`;


export function Filter(props: any) : any {

//Hooks on setting given filter, (whether one is active or not), the given location and age that should be filtered on, and the chosen ordering. 
    const [activeFilter, setActiveFilter] = useState('getAll');
    const [name, setName] = useState('');
    const [locationOutput, setLocationOutput] = useState('Location');
    const [orderOutput, setOrderOutput] = useState('Alphabetical');
    const [orderBy, setOrderBy] = useState('first_name')
    const [age, setAge] = useState(0);
    const [location, setLocation] = useState('any');
    const [pageNumber, setPageNumber] = useState(0);
    
    const client = props.client;
    client.writeData({data:{added: false}} );
    

//Query to get data from Apollo Link State 
    let PERSON_ADDED = gql`
        query checkAdded {
            added @client
        }
    `;
    const [checkIfAdded, addedResult] = useLazyQuery(PERSON_ADDED);



//Checking which filter is set, hence which result should be rendered.    
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




//Queries to get the instances based on the page number (10 pr page) 
    const [persons, allResults] = useLazyQuery(
        GET_ALL,
        { variables: { orderBy: orderBy, pageNumber: pageNumber } }
    );
    const [searchName, nameResults] = useLazyQuery(
        GET_PERSON,
        { variables: { name: name, orderBy: orderBy, pageNumber: pageNumber } }
    );
    const [filterSearch, filterResults] = useLazyQuery(
        FILTER_SEARCH,
        { variables: { age: age, location: location, orderBy: orderBy, pageNumber: pageNumber} });

    console.log(addedResult.data);   
    

    useEffect(() => {
        persons();
        checkIfAdded();
        }, []);
    
    console.log(allResults.data)
;


//Functionality to see which instances (persons) that should be output, handling the onClick events on navigation buttons
    function nextPage(){
        console.log("personCount = " + personCount)
        console.log("pageCount = " + pageNumber)
        if(personCount<10){
            document.getElementById("buttonAppearNext")!.innerHTML = '';
        }
        if(personCount===10){
            setPageNumber(pageNumber+10);
            console.log("pageNumber = " + pageNumber);
            if(pageNumber>=0){
            document.getElementById("buttonAppear")!.innerHTML = 'Previous';
            }    
        } 
    }

    function previousPage(){
        document.getElementById("buttonAppearNext")!.innerHTML = 'Next'
        setPageNumber(pageNumber-10);
        console.log(pageNumber)
        if(pageNumber===10){
            document.getElementById("buttonAppear")!.innerHTML = '';
            }
    }

    return (
        <div >  
            <div className="search-container">
                <form onSubmit={(event) => {
                    event.preventDefault();
                    let name : HTMLInputElement = document.getElementById("nameSearch") as HTMLInputElement;
                    setName(name.value);
                    searchName();
                    setPageNumber(0);
                    setActiveFilter('nameSearch');
                    }}>
                    <input type = "text" id="nameSearch" className="search-field" placeholder = "Search ..."></input>
                </form>
            </div>    
            <div >
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
                    setPageNumber(0);
                    filterSearch();}}>
                    <label className = "age-label" > Age: </label>
                    <input className = "age" type="number" id="number" min="0" max="100"></input>
                    <button type="submit" className = "age-button" > &rarr;</button>
                </form>
            </div>      

            <div className="dropdown-location">
                <button className="dropbtn">{locationOutput} ▼</button>
                <div className="dropdownContent">
                    <a onClick={()=> {setLocation("any");setPageNumber(0);setLocationOutput("Location");filterSearch();setActiveFilter('filters');}}>Any</a>
                    <a onClick={()=> {setLocation("Gløshaugen");setPageNumber(0);setLocationOutput("Gløshaugen");filterSearch();setActiveFilter('filters');}}>Gløshaugen</a>
                    <a onClick={()=> {setLocation("Dragvoll");setPageNumber(0);setLocationOutput("Dragvoll");filterSearch();setActiveFilter('filters');}}>Dragvoll</a>
                    <a onClick={()=> {setLocation("Handelshøyskolen");setPageNumber(0);setLocationOutput("Handelshøyskolen");filterSearch();setActiveFilter('filters');}}>Handelshøyskolen</a>
                    <a onClick={()=> {setLocation("Kalvskinnet");setPageNumber(0);setLocationOutput("Kalvskinnet");filterSearch();setActiveFilter('filters');}}>Kalvskinnet</a>
                </div>
            </div>
            <div className="dropdown-sorting">
                <button className="dropbtn">{orderOutput} ▼</button>
                <div className="dropdownContent">
                    <a onClick={()=> {setOrderBy("first_name");setPageNumber(0);setOrderOutput("Alphabetical");}}>Alphabetical</a>
                    <a onClick={()=> {setOrderBy("age");setPageNumber(0);setOrderOutput("Age");}}>Age</a>
                </div>
            </div>
            <div className="personBox">
                {setPerson(checkStatus(activeFilter))}
            </div>
            <div>
                 <span id="buttonAppear" className="navigationButton" onClick={previousPage}></span>
                 <span id="buttonAppearNext" className="navigationButton" onClick={nextPage}>Next</span>
            </div>
        </div> 
        </div>

    );

}