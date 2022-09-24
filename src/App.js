import React from 'react'
import { BrowserRouter as Router, 
  Routes, 
  Route, 
  } 
  from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Movies from './Pages/Movies';
import CreateM from './Pages/CreateM';
import About from './Pages/About';
import Login from './Pages/Login';
import Register from './Pages/Register'

const App = () => {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>   
      
        <Routes>
          <Route path='/Navbar' element ={<Navbar />} />
                  
          <Route path="/Home" element = {<Home />} />
               
          <Route path="/Movies" element = {<Movies />} />

          <Route path="/CreateM" element = {<CreateM />} />

          <Route path="/About" element = {<About />} />

          <Route path="/Login" element = {<Login />} />

          <Route path="/Register" element = {<Register />} />
        </Routes>
      </Router>

    </>
  );
}
  

export default App