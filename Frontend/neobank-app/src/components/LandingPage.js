import React from 'react';
import logo from '../images/logo.png';  
import Register from '../components/Register'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

function LandingPage(){
    return (
        <div className="App">
          <header className="App-header">
            <div className="container">
              <img className="image" src={logo} alt=""></img>

              <div className="middle">
                <Link to="/register">
                  <div className="text">Join us!</div>
                </Link>
              </div>
            </div>
  
             <h3 className="head1">Welcome to Neobank. </h3>
             <h3 className="head2">Your best finance management system.</h3>
           </header>

            <Routes>
                <Route path="/register" Component={Register} />
            </Routes>
        </div>
    )
}

export default LandingPage;