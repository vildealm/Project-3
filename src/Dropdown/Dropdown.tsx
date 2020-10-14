import React, { useState } from 'react';
import './Dropdown.css';
import { connect } from 'tls';



 export const Dropdown = () => {

return(

<div className="dropdown">
  <button className="dropButton"> City </button>
  <div className="dropdownContent">
    <a href="#">Trondheim</a>
    <a href="#">Aveiro</a>
    <a href="#">Washington</a>
  </div>
</div>


);
 }

