import React, { useState } from 'react';
import './AddPerson.css';
import './PopUp.css'; 
import { PopUp } from './PopUp';
import Modal from 'react-modal';

Modal.setAppElement('.app-container');

export const AddPerson = () => {

      const [modalOpen, setModalOpen] = useState(false);
      function openModal() {
            setModalOpen(true);
      }

      function closeModal() {
            setModalOpen(false);
      }
      return (
            <div>
                  <div className="list-container">
                        <div className="popup-wrapper">
                              <button className="addButton" onClick={openModal}>+ Add Person</button>
                              <Modal
                                    isOpen={modalOpen}
                                    onRequestClose={closeModal}
                                    contentLabel="Example Modal"
                                    className="modal-component"
                              > 
                              <PopUp setModalOpen={setModalOpen}/>  
                              </Modal>
                        </div>
                  </div>
            </div>
      );
}