import ReactModal from 'react-modal'
import { useState } from 'react'
import './Modaltag.css'

const Modaltag = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
  
    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
  
    return (
      <>
        <p onClick={openModal}>more</p>
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          shouldCloseOnOverlayClick={true}
          ariaHideApp={false}
          className="ReactModal"
        >
          <p>Hello, this is your modal content!</p>
        </ReactModal>
      </>
    );
  };
  
  export default Modaltag;
  