import React, { useState } from 'react';
import './AddPerson.css'; 
import {PopUp} from './PopUp'; 

export const AddPerson = () => {
      let [togglePop, setToggle] = useState(false);
      let [text, setText] = useState('+ Add Person'); 
      let [colorBtn, setColorBtn] = useState('#1aa6b7'); 

      const togglePopUp = (open: boolean) => {
            if(togglePop){
                  setToggle(togglePop = false);
                  setText('+ Add Person');
                  setColorBtn('#1aa6b7'); 
            }else{
                  setToggle(togglePop = true);
                  setText('Close');
                  setColorBtn(' #f56a79'); 
            }
      }
      return (
            <div>
                  <div className="list-container">
                        <div className="popup-wrapper"> 
                        <button className="addButton" onClick={() => togglePopUp(true)} style={{backgroundColor: colorBtn}}>{text}</button>
                              {togglePop ? <PopUp/> : null}
                        </div>
                  </div>
            </div>
      );
}