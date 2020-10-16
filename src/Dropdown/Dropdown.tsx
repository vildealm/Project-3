import React, { Dispatch, useState } from 'react';
import './Dropdown.css';
import { connect } from "react-redux";
import { fetchProducts } from "../actions/action";
import { ThunkDispatch } from 'redux-thunk';


interface DispatchProps {
  person: {id:number, firstname:String, lastname:String, age:number, location:String}
}

type Props = DispatchProps

export const Dropdown = (dispatch: DispatchProps) => {
  return (
    <div className="dropdown">
      <button className="dropButton"> City </button>
      <div className="dropdownContent">
    <ul>
          
      <li key={person.id}>{props.person.firstname}</li>
        
        </ul>

      </div>
    </div>


  );
}

export default Dropdown;


/* <a href="#">Trondheim</a>
      <a href="#">Aveiro</a>
      <a href="#">Washington</a>*/