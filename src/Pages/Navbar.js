import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="coll">
          <Link to="/Home" className="home">
            HOME
          </Link>
          <Link to="/Movies" className="amovies">
            ALL MOVIES
          </Link>
          <Link to="/CreateM" className="cmovies">
            CREATE MOVIES
          </Link>
        </div>
        <div className="coll">
          <span className="moyo"> MOYO <span className="textred">-</span> FILMS</span>
        </div>
        <div className="coll">
          <span className="searchbtn">
            <i className="bi bi-search "></i>
          </span>
          <Link to= "/Login">
          <button className="login">LOGIN</button>
          </Link>
          <Link to= "/Register">
          <button className="register"> REGISTER </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

