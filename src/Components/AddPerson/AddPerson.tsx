import React, { useState } from 'react';
import './AddPerson.css'; 
import {PopUp} from './PopUp'; 
import Modal from 'react-modal'; 

export const AddPerson = () => {
      let [togglePop, setToggle] = useState(false);
      let [visible, setVisibility] = useState(''); 
      let [colorBtn, setColorBtn] = useState('#1aa6b7'); 
      let [popOpen, setPopOpen] = useState(true);
      const [modalIsOpen, setIsOpen] = React.useState(false);

      //Modal.setAppElement('#yourAppElement'); 

      function openModal() {
        setIsOpen(true);
      }
     
      function afterOpenModal() {
        setColorBtn( '#f00');
      }
     
      function closeModal(){
        setIsOpen(false);
      }

      const togglePopUp = (open: boolean) => {
            if(togglePop){
                  setToggle(togglePop = false);
                  setColorBtn('#1aa6b7'); 
                  setVisibility(visible = '')
                  setPopOpen(popOpen = false); 
            }else{
                  setToggle(togglePop = true);
                  setVisibility(visible = 'none'); 
                  setPopOpen(popOpen = true); 
            }
      }

      return (
            <div>
                  <div className="list-container">
                        <div className="popup-wrapper"> 
                        <button className="addButton" onClick={() => togglePopUp(true)} style={{backgroundColor: colorBtn, display: visible}}>+ Add Person</button>
                              {togglePop ? <PopUp/> :  null}
                        </div>
                  </div>
            </div>
      );
}