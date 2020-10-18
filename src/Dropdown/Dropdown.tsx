import React from 'react';
import './Dropdown.css';

/*
interface DispatchProps {
  person: {id:number, firstname:String, lastname:String, age:number, location:String}
}

type Props = DispatchProps
*/
const Dropdown = () => {
  return (
    <div className="dropdown">
      <button className="dropButton"> City </button>
      <div className="dropdownContent">
      </div>
    </div>


  );
}

export default Dropdown;


/* <a href="#">Trondheim</a>
      <a href="#">Aveiro</a>
      <a href="#">Washington</a>*/