import React, {useState} from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import TypingAnimation from "react-typed";
import '../styles/wallet.css';
import wallet from '../images/wallet-2.png'
import {useSpring, animated} from "react-spring";

function WalletComponent() {
    let balance = 237.34;

    return (
        <div className="wallet">
            <h1 className="balance">{AnimateNumber(balance)}</h1>
        </div>
    )
}

function AnimateNumber(n) {
    const {number} = useSpring({
        from: {
            number: 0.00
        },
        number: n,
        delay: 200,
        config: {
            mass: 1,
            tension: 20,
            friction: 10
        }
    });

    return <animated.div>{number.to((n) => `$${n.toFixed(2)}`)}</animated.div>;
}

export default WalletComponent;