import React, { useState } from 'react';
import './List.css';



 export const List = () => {

    const [lastName, setLastName] = useState("Almestad");

return(
    <div>
          <button onClick={() => setLastName("Bø")}> Endre navn </button>

        <ul className="list">
          <li> {lastName}</li>
          <li>{lastName} </li>
          <li> {lastName} </li>
        </ul>
    </div>
);

}
