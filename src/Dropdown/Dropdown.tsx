import React, { useState } from 'react';
import './Dropdown.css';
import { connect } from 'tls';




 export function Dropdown (props: any) {


    let options : any = props.options;
    let length : any = props.options.length;

    function getOptions(){
        {
           for (var i = 1; i <= length; i++) {
            }

       }

   }
   
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
      {options.map(function(item: any){
          return <a href="#" onClick = {getAveiro}>{item}</a>;
      })}
   
  </div>

</div>


);
 }

