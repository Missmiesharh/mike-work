import React from "react";
import logo from "../images/kong-pic.png";
import img from "../images/img.png"; 
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.jpg";
import Navbar from "./Navbar";

const Home = () => {
  return (
    
    <div className="container">
  
      <div className="homebg">
        <Navbar />
        <div className="home-sec">
          <img src={logo} className="body_text1" alt="d" />
          <div>
            <button className="view">
              <i className="bi bi-play-circle-fill"> View Trailer</i>
            </button>
          </div>
        </div>
      </div>

      <div className="container2">
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

export default Home;
