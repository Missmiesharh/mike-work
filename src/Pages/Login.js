import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="createContainer">
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
          <span className="moyo">
            MOYO <span className="textred">-</span> FILMS
          </span>
        </div>
        <Link to= "/Login">
        <button className="login">Login</button>
        </Link>
        <Link to= "/Register">
        <button className="register">Register</button>
        </Link>
      </div>

      <div className="loginForm">
        <form>
          <div id="col2">
            <label>Email</label>
            <input type="text" />
          </div>

          <div id="col3">
            <label>Password</label>
            <input type="text" />
          </div>
          <br />
            <input type="submit" value= "Login" id="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
