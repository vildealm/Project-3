import React, { useState } from 'react';
import './AddPerson.css'; 
import {PopUp} from './PopUp'; 

export const AddPerson = () => {
      let [togglePop, setToggle] = useState(false);
      let [visible, setVisibility] = useState(''); 
      let [colorBtn, setColorBtn] = useState('#1aa6b7'); 

      const togglePopUp = (open: boolean) => {
            if(togglePop){
                  setToggle(togglePop = false);
                  setColorBtn('#1aa6b7'); 
                  setVisibility(visible = '')

            }else{
                  setToggle(togglePop = true);
                  setVisibility(visible = 'none'); 
            }
      }
      return (
            <div>
                  <div className="list-container">
                        <div className="popup-wrapper"> 
                        <button className="addButton" onClick={() => togglePopUp(true)} style={{backgroundColor: colorBtn, display: visible}}>+ Add Person</button>
                              {togglePop ? <PopUp/> : null}
                        </div>
                  </div>
            </div>
      );
}