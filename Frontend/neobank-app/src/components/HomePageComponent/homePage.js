import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import TypingAnimation from "react-typed";
import './homePage.css';
import { useSpring, animated } from "react-spring";
import dollarImage from "../../images/dollar.png"
import RecentTransactions from "../RecentTransactionsComponent/recentTransactions"
import MenuComponent from "../MenuComponent/menu"

function HomePageComponent() {
    return (
        <div className="main-container">
            <MenuComponent />
            <div className="content">
                <div className="default-content">
                    <div className="total-balance">
                        <div className="total-balance-content">
                            <h1 id="total-balance-h1">Total balance</h1>
                            <h1 id="balance-animation-h1"><i>{AnimateNumber(2543.45)}</i></h1>
                            <img className="coins-image" src={dollarImage}></img>
                        </div>
                    </div>
                    <div className="monthly-spendings">
                        <div className="monthly-spendings-content">
                            <h1 class="monthly-spendings-h1">Monthy spendings</h1>
                            <h2 id="monthly-spendings-h2">{CalculateCurrentMonth()}</h2>
                            <h1 class="monthly-spendings-h1" id="monthly-spendings-value"><i>{AnimateNumber(560.34)}</i></h1>
                        </div>
                    </div>
                    <RecentTransactions />
                </div>
            </div>
        </div>
    )
}

function CalculateCurrentMonth() {
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();

    currentDate.setMonth(currentDate.getMonth() - 1);
    const previousMonth = currentDate.toLocaleString('default', { month: 'long' });

    const previousMonthYear = currentDate.getFullYear();
    const currentDateOfMonth = new Date().getDate();
    const currentMonthName = currentDate.toLocaleString('default', { month: 'long' });

    return `${previousMonth} ${currentDateOfMonth}, ${previousMonthYear} - ${currentMonth} ${currentDateOfMonth}, ${currentYear}`;
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