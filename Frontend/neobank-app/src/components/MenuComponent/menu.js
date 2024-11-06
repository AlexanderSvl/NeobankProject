import React from 'react';
import "./menu.css";
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div className="menu">
            <div className="menu-header">Menu</div>
            <ul className="menu-list">
                <li className="menu-item"><Link to="/my-wallet">My Wallet</Link></li>
                <li className="menu-item"><Link to="/transactions">Transactions</Link></li>
                <li className="menu-item"><Link to="/investing">Investing</Link></li>
                <li className="menu-item"><Link to="/stocks">Stocks</Link></li>
                <li className="menu-item"><Link to="/crypto">Crypto</Link></li>
                <li className="menu-item"><Link to="/vaults">Vaults</Link></li>
                <li className="menu-item"><Link to="/spendings">Spendings</Link></li>
                <li className="menu-item"><Link to="/reports">Reports</Link></li>

                <div className="bottom-items">
                    <li className="menu-item"><Link to="/my-account">My Account</Link></li>
                    <li className="menu-item"><Link to="/settings">Settings</Link></li>
                </div>
            </ul>
        </div>
    );
}

export default Menu;
