import React, {useState} from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import TypingAnimation from "react-typed";
import MenuComponent from "./menu";
import '../styles/home-page.css'
import WalletComponent from "./wallet";

function HomePageComponent() {
    return (
        <div className="main-container">
            <MenuComponent></MenuComponent>
            <WalletComponent></WalletComponent>
        </div>
    )
}

export default HomePageComponent;