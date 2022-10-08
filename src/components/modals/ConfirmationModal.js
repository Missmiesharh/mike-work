import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const ConfirmationModal = ({ closeModal }) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    closeModal();
  };

  return (
    <Modal show={open} backdrop="static" keyboard={true}>
      <Modal.Body>
        <div className="form2">
          <div className="postHeader">
            <h2 id="h2">Post Comment</h2>
            <button className="xbtn" onClick={handleClose}>
              X
            </button>
          </div>

          <i className="bi bi-check-circle-fill"></i>

          <h3 id="text">You Have Successfully Posted a Comment</h3>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ConfirmationModal;
