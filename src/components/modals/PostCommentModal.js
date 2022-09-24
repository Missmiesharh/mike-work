import {useState} from 'react';
import Modal from 'react-bootstrap/Modal';

const PostCommentModal = ({onchange}) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    onchange();
  };

  return (
    <>
      <Modal show={show} backdrop="static" centered keyboard={false}>
        <Modal.Body>
          <div className="form">
            <h2 id="h2">Post Comment</h2>
            <form>
              <input type="text" placeholder="Name" id="fname" name="fname"/>
              <br/>
              <textarea
                id="lname"
                placeholder="Comment"
                name="lname"
              ></textarea>
              <br/>
              <input type="submit" id="submit"/>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PostCommentModal;
