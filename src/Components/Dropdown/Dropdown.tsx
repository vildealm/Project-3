import React from 'react';
import './Dropdown.css';

//dette er den valgte alderen det skal filtreres på
let ageFilter; 
let locationFilter; 

function submitAgeFilter(){
    let inputElement: HTMLInputElement = document.getElementById('number') as HTMLInputElement;
    let value: string = inputElement.value;
    ageFilter = parseInt(value);
}

function submitLocationFilter(location : string ) : any {
    locationFilter = location;
    
}

export function Dropdown() : any {
    return (
        <div>      
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
