import { useState } from "react"
import Modal from "react-bootstrap/Modal";


const ConfirmationModal = (unconfirm) => {
    const [open, setOpen] = useState(true);
    const handleClose = () =>{
        setOpen(false);
        unconfirm();

    }
    // backdrop="static"

    // const [renderConfirmationStatus, setrenderConfirmationStatus] = useState(false);
    // const confirm = () => {
    //   setrenderConfirmationStatus(true);
    // }
    
    // const postConfirmReader= renderConfirmationStatus ? <ConfirmationModal unconfirm =
    // {() => setrenderConfirmationStatus(false) } /> : null ;

  return (

    <Modal show={open} keyboard={true}> 
    <Modal.Body>
      <div className="form2">
        <div className="postHeader">
          <h2 id="h2">Post Comment</h2>
          <button className="xbtn" onClick={handleClose}>                  
            X
          </button>
        </div>
       <h3>You have Successfully Posted a Comment</h3>
      </div>
    </Modal.Body>
  </Modal>

  )
}

export default ConfirmationModal