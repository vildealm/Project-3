import React, { Dispatch, useState } from 'react';
import './Dropdown.css';
import { connect } from "react-redux";
import { fetchProducts } from "../actions/action";
import { ThunkDispatch } from 'redux-thunk';


  interface DispatchProps {

  }

  type Props = DispatchProps
  const { error, loading, products } = Props;
  
  export const Dropdown = (dispatch: ThunkDispatch<{},{}, any>): DispatchProps => {
  return(
  
  <div className="dropdown">
    
    <button className="dropButton"> City </button>
    <div className="dropdownContent">
    <ul>
        {products.map(product =>
          <li key={product.id}>{product.name}</li>
        )}
    </ul>
     
    </div>
  </div>

  
  );
   }
  

class ProductList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {products.map(product =>
          <li key={product.id}>{product.name}</li>
        )}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(ProductList);

 
/* <a href="#">Trondheim</a>
      <a href="#">Aveiro</a>
      <a href="#">Washington</a>*/