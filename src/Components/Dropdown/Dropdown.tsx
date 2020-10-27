import React from 'react';
import './Dropdown.css';

function submitAgeFilter(){


    //add age filter

}

export function Dropdown() : any {

 


    return (
        <div>      

            <div className = "dropdown-age">
                <label className = "age-label" > Age: </label>
                <input value="21" className = "age" type="number" id="number" min="20" max="100" ></input>
                <button className = "age-button" onClick={submitAgeFilter}> &rarr;</button>
                
            </div>      
                

            <div className="dropdown-location">
                <button className="dropbtn">Location ▼</button>
                <div className="dropdownContent">
                    <a>Trondheim</a>
                    <a>Torino</a>
                    <a>Oslo</a>
                </div>
            </div>
            <div className="dropdown-sorting">
                <button className="dropbtn">Sort by ▼</button>
                <div className="dropdownContent">
                    <a>Alphabetical</a>
                    <a>Age</a>
                    <a>Time added</a>
                </div>
            </div>
        </div> 
    );
}
