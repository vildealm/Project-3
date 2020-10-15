import React, { useState } from 'react';
import './Output.css';



export const Output = () => {

    const [lastName, setLastName] = useState("Almestad");

return(
    <div></div>
    /** 
    <div>   
         <button onClick={() => setLastName("Bø")}> Endre navn </button>
        
        <ul className="list">
          <li> {lastName}</li>
          <li>{lastName} </li>
          <li> {lastName} </li>
        </ul>
       
    </div>

  */
);

}