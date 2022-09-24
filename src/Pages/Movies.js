import Navbar from "./Navbar";
import img from "../images/ww.png";
import img1 from "../images/jl.png";
import img2 from "../images/mk.png";
import img3 from "../images/tc.png";
import img4 from "../images/tf.png";
import img5 from "../images/halfpic.png";
import { Link } from "react-router-dom";

const Movies = () => {
  return (
    <>
      <div className="container2">
        <Navbar />
        <div className="list">
          <div className="row">
            <span>
            <div className="head-image">
              <img src={require("../images/ww.png")} alt="" />
            </div>
            <div id="text-on-image">
              <Link to = "/About"> Wonder Woman 1984 </Link>
            </div>
            </span>
            <img src={img1} alt="jl" /> 
            <img src={img2} alt="mk" />
            <img src={img3} alt="tc" />
            <img src={img4} alt="tf" />
            <img src={img5} alt="half" />

            <br />
          </div>
          <div className="row">
            <img src={img} alt="ww" />
            <img src={img1} alt="jl" />
            <img src={img2} alt="mk" />
            <img src={img3} alt="tc" />
            <img src={img4} alt="tf" />
            <img src={img5} alt="half" />
            <br />
          </div>

          <div className="row">
            <img src={img} alt="ww" />
            <img src={img1} alt="jl" />
            <img src={img2} alt="mk" />
            <img src={img3} alt="tc" />
            <img src={img4} alt="tf" />
            <img src={img5} alt="half" />
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
