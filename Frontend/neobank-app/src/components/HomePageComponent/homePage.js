import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import TypingAnimation from "react-typed";
import './homePage.css'
import WalletComponent from "../wallet";

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
                <h1>HOME</h1>
            </div>
        </div>
    )
}

export default HomePageComponent;