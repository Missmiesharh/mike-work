import { useState } from "react";
import Modal from "react-bootstrap/Modal";


const PostCommentModal = ({ onchange, onConfirm }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    onchange();
  };

  const confirm = () => {
    setShow(false);
    onConfirm();
  };

  
 

  return (
    <div className="cform">

      <div className="form">       
        <Modal show={show} backdrop="static" centered keyboard={false}>
          <Modal.Body>
            <div className="form2">
              <div className="postHeader">
                <h2 id="h2">Post Comment</h2>
                <button className="xbtn" onClick={handleClose}>                  
                  X
                </button>
              </div>
              <form>
                <input type="text" placeholder="Name" id="fname" name="fname" />
                <br />
                <textarea
                  id="lname"
                  placeholder="Comment"
                  name="lname"
                ></textarea>
                <br />
                <input type="submit" id="submit"  onClick={confirm} />
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </div>

    


    </div>
  );
};

export default PostCommentModal;
