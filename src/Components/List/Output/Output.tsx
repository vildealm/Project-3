import React, { useState } from 'react';
import gql from 'graphql-tag';
import './Output.css';



export const Output = () => {

  const GET_LOCATIONQUERY = gql`
  {
    getLocation(Keys: "${keys}",
                 Packaging: "${packaging}",
                 ProductSelection: "${productSelection}",
                 Country: "${country}",
                 YearMin: "${yearMin}",
                 YearMax: "${yearMax}",
                 PriceMin: ${priceMin},
                 PriceMax: ${priceMax},
                 Skipping: ${skipping},
                 SortAfter: "${sortAfter}") {
      Firstname
      Lastname
      Location
      Age
    }
  }`;
return GET_LOCATIONQUERY;


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