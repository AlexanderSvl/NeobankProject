import React from 'react';
import logo from '../../images/logo.png';
import Register from '../RegisterPageComponent/registerPage';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import TypingAnimation from "react-typed";
import "./landingPage.css";

function LandingPageComponent() {

    const linkStyle = {
        textDecoration: "none",
    };

    return (
        <div className="App">
            <header className="App-header">
                <div className="container">
                    <img className="image" src={logo} alt="Neobank logo"></img>

                    <div className="middle">
                        <Link to="/register" style={linkStyle}>
                            <div className="text">Join us!</div>
                        </Link>
                    </div>
                </div>

                <h2 className="head1">Welcome to Neobank</h2>
                <TypingAnimation 
                    className="head2" 
                    strings={["Your best finance management system."]} 
                    typeSpeed={50} 
                    startDelay={1000} 
                    showCursor={true}
                />
            </header>

            <Routes>
                <Route path="/register" Component={Register}/>
            </Routes>
        </div>
    );
}

export default LandingPageComponent;
