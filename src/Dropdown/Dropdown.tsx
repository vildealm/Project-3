import React, { Dispatch, useState } from 'react';
import './Dropdown.css';
import { connect } from "react-redux";
import { fetchProducts } from "../actions/action";
import { ThunkDispatch } from 'redux-thunk';


interface DispatchProps {
  person: {id:number, firstname:String, lastname:String, age:number, location:String}
}

type Props = DispatchProps
const { error, loading, products } = Props;

export const Dropdown = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
  return (

    <div className="dropdown">

      <button className="dropButton"> City </button>
      <div className="dropdownContent">
    <ul>
          {products.map(person =>
            <li key={person.id}>{person.firstname}</li>
          )}
        </ul>

      </div>
    </div>


  );
}


const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(Dropdown);


/* <a href="#">Trondheim</a>
      <a href="#">Aveiro</a>
      <a href="#">Washington</a>*/