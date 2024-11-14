import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook
import "./recentTransactions.css";

const recentTransactionsSimulation = [
    { ID: "1", TransactionType: "Deposit", Amount: 230.00, TransactionDate: new Date(), Description: "Bought a new phone", Status: "Pending" },
    { ID: "2", TransactionType: "Withdrawal", Amount: 330.00, TransactionDate: new Date(), Description: "Bought a new phone", Status: "Completed" },
    { ID: "3", TransactionType: "Transfer", Amount: 1090.60, TransactionDate: new Date(), Description: "Bought a new phone", Status: "Completed" },
    { ID: "4", TransactionType: "Transfer", Amount: 3.30, TransactionDate: new Date(), Description: "Bought a new phone", Status: "Failed" },
    { ID: "5", TransactionType: "Transfer", Amount: 13.30, TransactionDate: new Date(), Description: "Bought a new phone", Status: "Failed" },
    { ID: "6", TransactionType: "Withdrawal", Amount: 23.40, TransactionDate: new Date(), Description: "Bought a new phone", Status: "Failed" },
    { ID: "7", TransactionType: "Transfer", Amount: 3.30, TransactionDate: new Date(), Description: "Bought a new phone", Status: "Failed" },
];

const RecentTransactions = () => {
    const [showAll, setShowAll] = useState(false);
    const navigate = useNavigate();  // Initialize the navigate function

    const handleClick = () => {
        navigate('/transactions');  // Navigate to /transactions after clicking
    };

    const transactionsToShow = showAll ? recentTransactionsSimulation : recentTransactionsSimulation.slice(0, 5);

    return (
        <div className="recent-transactions">
            <div className="recent-transactions-content">
                <h2>Recent Transactions</h2>
                <ul className="transaction-list">
                    {transactionsToShow.map((transaction) => (
                        <li key={transaction.ID} className={`transaction-item ${transaction.Status.toLowerCase()}`}>
                            <span className="transaction-type">{transaction.TransactionType}</span>
                            <span className="transaction-amount">${transaction.Amount.toFixed(2)}</span>
                            <span className="transaction-date">{transaction.TransactionDate.toLocaleString()}</span>
                            {/*<span className="transaction-description">{transaction.Description.toLocaleString()}</span>*/}
                            <span className={`transaction-status ${transaction.Status.toLowerCase()}`}>{transaction.Status}</span>
                        </li>
                    ))}
                </ul>
                {!showAll && recentTransactionsSimulation.length > 5 && (
                    <button className="see-all-button" onClick={handleClick}>See all</button>
                )}
            </div>
        </div>
    );
};

export default RecentTransactions;
