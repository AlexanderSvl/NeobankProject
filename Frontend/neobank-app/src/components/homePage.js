import React, {useState} from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import logo from '../images/logo.png';
import logoNoText from '../images/neobank-logo-notext.png';
import TypingAnimation from "react-typed";
import MenuComponent from "./menu";

function HomePageComponent() {
    return (
        <div className="main-container">
            <MenuComponent></MenuComponent>
            <div className="main"></div>
        </div>
    )
}

export default HomePageComponent;