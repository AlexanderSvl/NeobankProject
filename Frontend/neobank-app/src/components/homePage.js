import React, {useState} from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import '../styles/home-page.css';
import logo from '../images/logo.png';
import logoNoText from '../images/neobank-logo-notext.png';
import TypingAnimation from "react-typed";

function HomePageComponent() {
    return (
        <div className="main-container">
            <div className="menu">
                <div className="menu-container">
                    <img className="logo" src={logoNoText}></img>

                    <p
                        className="menuItem"
                        style={{
                        marginTop: "8vh"
                    }}>My Wallet</p>
                    <p
                        className="menuItem"
                        style={{
                        marginTop: "2vh"
                    }}>Transactions</p>

                    <p
                        className="menuItem"
                        style={{
                        marginTop: "10vh"
                    }}>Investing</p>
                    <p
                        className="menuItem"
                        style={{
                        marginTop: "2vh"
                    }}>Stocks</p>
                    <p
                        className="menuItem"
                        style={{
                        marginTop: "2vh"
                    }}>Crypto</p>

                    <p
                        className="menuItem"
                        style={{
                        marginTop: "10vh"
                    }}>Spendings</p>
                    <p
                        className="menuItem"
                        style={{
                        marginTop: "2vh"
                    }}>Reports</p>

                    <p
                        className="menuItem"
                        style={{
                        marginTop: "9vh"
                    }}>Settings</p>
                </div>
            </div>
            <div className="main"></div>
        </div>
    )
}

export default HomePageComponent;