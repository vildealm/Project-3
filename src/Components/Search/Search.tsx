import React, { useState } from 'react';
import './Search.css';
import {TextField}from '@material-ui/core';

import { connect } from 'tls';

 export const Search = () => {
return(
    <div >
      <div className="search-container"> 
      <TextField className="search" label="Search" variant="outlined"style={{ backgroundColor: 'white', width: '60vh' }}> Search...</TextField>
      </div>
    </div>
      
);
 }

/* <input className="search" name="search" placeholder="Search.."></input>
      <button className="search_button">&#8594;</button>*/
