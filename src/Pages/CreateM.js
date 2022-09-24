import { Link } from "react-router-dom";

const CreateM = () => {
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
        <button className="login">LOGOUT</button>
      </div>

      <div className="formC"> 
      <div id="textC">Create Movies</div>
        <form id="createForm">   
          <div className="col">
            <div id="col2">
              <label>Name of the Movie</label>
              <input type="text" />
            </div>

            <div id="col3">
              <label>Description</label>
              <textarea />
            </div>

            <div id="test">
              <div id="col4">
                <label>Release Date</label>
                <input type="text" />
              </div>

              <div id="col4">
                <label>Ticket Price</label>
                <input type="text" />
              </div>
            </div>

            <div id="test">
              <div id="col4">
                <label>Country</label>
                <input type="text" />
              </div>

              <div id="col4">
                <label>Genre</label>
                <input type="text" />
              </div>
            </div>

            <div id="col5">
              <label>Add Images</label>
              <input type="file" />
            </div>
            <br />
            <input type="submit" id="submit" />
          </div>
         
      </form>
       
      </div>
    </div>
  );
};

export default CreateM;
