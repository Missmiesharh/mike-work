import { useState } from "react";

import Navbar from "./Navbar";
import PostCommentModal from "../components/modals/PostCommentModal";
import ConfirmationModal from "../components/modals/ConfirmationModal";
import img from "../images/img.png";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.jpg";

const About = () => {
  const [renderModalStatus, setRenderModalStatus] = useState(false);
  
  const [renderConfirmationStatus, setrenderConfirmationStatus] = useState(false);

  const addComment = () => setRenderModalStatus(true);
  const onConfirm = () => {
    setRenderModalStatus(false)
    setrenderConfirmationStatus(true)
  };
  

  const postCommentRender = renderModalStatus ? (
    <PostCommentModal onchange={() => setRenderModalStatus(false)} onConfirm={onConfirm}/> ) : null;


    
  const postConfirmReader= renderConfirmationStatus ? <ConfirmationModal closeModal={() => setrenderConfirmationStatus(false) } /> : null ;


  
  return (
    <div className="aboutContainer">
       {postCommentRender}
       {postConfirmReader}
      <div className="about">
        <Navbar />
        <div className="section1">
          <div className="imageContainer">
            <div className="AboutImage">
              <img src={require("../images/ww2.png")} alt="" />
            </div>
            <div className="wwText">
              <span id="aboutText">
                <h3>Wonder Woman 1984</h3>
              </span>
              <button className="view">
                <i className="bi bi-play-circle-fill"> View Trailer</i>
              </button>
            </div>
            <div className="aboutTable">
              <h3>Wonder Woman 1984</h3>
              <p id="stars">Stars</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
                <br />
                cras sapien ut id ultrices sed faucibus fringilla cras. Varius
                leo <br />
                libero maecenas adipiscing netus. Ac eu, est a lacus diam <br />{" "}
                egestas molestie blandit purus. A pretium eget mauris cursus{" "}
                <br /> massa urna malesuada diam nibh.
              </p>
              <p>Release Date</p>
              <p id="date">31st August 2022</p>
              <p>Ticket Price</p>
              <p id="price">N5000</p>
              <p>Country</p>
              <p id="country">Nigeria</p>
              <p>Genre</p>
              <p id="genre">Action, Thriller, Porn </p>
            </div>
            <button className="postC" onClick={addComment}>
              Post Comment
            </button>
          </div>
        </div>
      </div>
    <div className="other">
        <h3>Other Movies Suggestion</h3>
        <div className="slides">
          <img src={img1} alt="falcon" />
          <img src={img} alt="got" />
          <img src={img2} alt="wV" />
          <img src={img3} alt="fear" />
        </div>
      </div>
     
    </div>
  );
};

export default About;
