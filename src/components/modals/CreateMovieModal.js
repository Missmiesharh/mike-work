import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const CreateMovieModal = ({ onOpen }) => {
  const [see, setSee] = useState(true);

  const closeBtn = () => {
    setSee(false);
    onOpen();
  };
  return (
    <>
      <Modal show={see} backdrop="static" keyboard={false}>
        <Modal.Body>
          <div className="form2">
            <div className="postHeader">
              <h2 id="h2">Post Comment</h2>
              <button className="xbtn" onClick={closeBtn}>
                X
              </button>
            </div>
            <i className="bi bi-check-circle-fill"></i>
            <h3 id="text">You Have Successfully Created a Movie</h3>
          </div>
        </Modal.Body>
      </Modal>
    </>  
  );
};

export default CreateMovieModal;
