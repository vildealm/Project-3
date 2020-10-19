import React, { useState } from 'react';
import './Search.css';
import { connect } from 'tls';

 export const Search = () => {
return(
    <div className="search-container">
      <input className="search" name="search" placeholder="Search.."></input>
      <button className="search_button">&#8594;</button>
      </div>
      
);
 }

