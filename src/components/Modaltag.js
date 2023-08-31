import ReactModal from 'react-modal'
import { useState } from 'react'
import './Modaltag.css'

const Modaltag = ({desp}) => {
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
          <p>{desp}</p>
        </ReactModal>
      </>
    );
  };
  
  export default Modaltag;
  