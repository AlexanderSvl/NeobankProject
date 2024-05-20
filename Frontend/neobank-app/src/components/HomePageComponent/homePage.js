import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import TypingAnimation from "react-typed";
import './homePage.css';
import { useSpring, animated } from "react-spring";
import dollarImage from "../../images/dollar.png"

function HomePageComponent() {

    return (
        <div className="main-container">
            <div className="menu">
                <div className="menu-header">Menu</div>
                <ul className="menu-list">
                    <li className="menu-item">My Wallet</li>
                    <li className="menu-item">Transactions</li>
                    <li className="menu-item">Investing</li>
                    <li className="menu-item">Stocks</li>
                    <li className="menu-item">Crypto</li>
                    <li className="menu-item">Vaults</li>
                    <li className="menu-item">Spendings</li>
                    <li className="menu-item">Reports</li>
                    <li className="menu-item" id="settings">Settings</li>
                </ul>
            </div>
            <div className="content">
                <div className="default-content">
                    <div className="total-balance">
                        <div className="total-balance-content">
                            <h1 id="total-balance-h1">Total balance</h1>
                            <h1 id="balance-animation-h1">{AnimateNumber(2543.45)}</h1>
                            <img className="coins-image" src={dollarImage}></img>
                        </div>
                    </div>
                    <div className="monthly-spendings">
                        <h1>2</h1>
                    </div>
                    <div className="recent-transactions">
                        <h1>3</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

function AnimateNumber(n) {
    const { number } = useSpring({
        from: {
            number: 0.00
        },
        number: n,
        delay: 100,
        config: {
            mass: 1,
            tension: 7,
            friction: 5
        }
    });

    return <animated.div>{number.to((n) => `USD $${n.toFixed(2)}`)}</animated.div>;
}

export default HomePageComponent;