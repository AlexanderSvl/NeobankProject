import React from 'react';
import logo from '../images/logo.png';
import Register from '../components/Register'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import TypingAnimation from "react-typed";
import "../styles/landing-page.css";

function LandingPageComponent() {

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'blue'
    };

    var i = 0;
    var txt = 'Lorem ipsum dummy text blabla.';
    var speed = 50;

    function typeWriter() {
        if (i < txt.length) {
            document
                .getElementsByClassName("demo")
                .innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    return (
        <div className="App" onLoad={typeWriter()}>
            <header className="App-header">
                <div className="container">
                    <img className="image" src={logo} alt=""></img>

                    <div className="middle">
                        <Link to="/register" style={linkStyle}>
                            <div className="text">Join us!</div>
                        </Link>
                    </div>
                </div>

                <h2 className="head1" >Welcome to Neobank. </h2>
                <TypingAnimation className="head2" strings={["Your best finance management system."]} typeSpeed={50} startDelay={1000} showCursor={true}/>
            </header>

            <Routes>
                <Route path="/register" Component={Register}/>
            </Routes>
        </div>
    )

}

export default LandingPageComponent;