import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import TypingAnimation from "react-typed";
import './homePage.css';
import { useSpring, animated } from "react-spring";
import dollarImage from "../../images/dollar.png"
import RecentTransactions from "./RecentTransactionsComponent/recentTransactions"

function HomePageComponent() {
    const recentTransactionsSimulation = [
        { ID: "1", TransactionType: "Deposit", Amount: 230.00, TransactionDate: new Date(), Status: "Pending" },
        { ID: "2", TransactionType: "Withdrawal", Amount: 330.00, TransactionDate: new Date(), Status: "Completed" },
        { ID: "3", TransactionType: "Transfer", Amount: 1090.60, TransactionDate: new Date(), Status: "Completed" },
        { ID: "4", TransactionType: "Transfer", Amount: 3.30, TransactionDate: new Date(), Status: "Failed" },
    ]

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
                    <li className="menu-item" id="myAccount">My Account</li>
                    <li className="menu-item" id="settings">Settings</li>
                </ul>
            </div>
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