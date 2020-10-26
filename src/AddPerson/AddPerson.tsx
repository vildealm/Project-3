import React, { useState } from 'react';
import './AddPerson.css';
import {PopUp} from './PopUp'; 

export const AddPerson = () => {
      let [togglePop, setToggle] = useState(false);
      return (
            <div>
                  <div className="list-container">
                        <div className="popup-wrapper"> 
                              <button className="addButton" onClick={() => setToggle(togglePop = true)}>+ Add person</button>
                              {togglePop ? <PopUp/> : null}
                        </div>
                  </div>
            </div>
      );
}



