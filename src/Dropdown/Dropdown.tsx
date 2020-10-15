import React, { useState } from 'react';
import './Dropdown.css';
import { connect } from 'tls';



 export function Dropdown (props: any) {

    let filter : any = props.filter;
    let options : any = props.options;
  

   
    function getAveiro(){
        
        //contact backend to getAveiro
    }
    function getTrondheim(){
        //contact backend to getAveiro
    }

    function getWashington(){
        //contact backend to getAveiro
    }

return(
    
<div className="dropdown">
  <button className="dropButton"> {props.filter} </button>
  <div className="dropdownContent">
    <a href="#" onClick = {getAveiro}>{options[0]}</a>
    <a href="#" onClick = {getTrondheim}>{options[1]}</a>
    <a href="#" onClick = {getWashington}>{options[2]}</a>
  </div>
</div>


);
 }

