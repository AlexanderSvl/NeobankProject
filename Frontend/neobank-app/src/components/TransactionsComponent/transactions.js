import React, { useState } from 'react';
import "./transactions.css";
import MenuComponent from '../MenuComponent/menu';

const recentTransactionsSimulation = [
    { ID: "1", TransactionType: "Deposit", Amount: 230.00, TransactionDate: new Date(), Description: "Bought a new phone", Status: "Pending" },
    { ID: "2", TransactionType: "Withdrawal", Amount: 330.00, TransactionDate: new Date(), Description: "Bought a new phone", Status: "Failed" },
    { ID: "3", TransactionType: "Transfer", Amount: 1090.60, TransactionDate: new Date(), Description: "Bought a new phone", Status: "Failed" },
    { ID: "4", TransactionType: "Withdrawal", Amount: 500.00, TransactionDate: new Date(), Description: "Paid rent", Status: "Completed" },
    { ID: "5", TransactionType: "Transfer", Amount: 150.00, TransactionDate: new Date(), Description: "Sent money to friend", Status: "Completed" },
    { ID: "6", TransactionType: "Deposit", Amount: 450.00, TransactionDate: new Date(), Description: "Salary", Status: "Completed" },
    { ID: "7", TransactionType: "Transfer", Amount: 230.50, TransactionDate: new Date(), Description: "Transfer to savings", Status: "Pending" },
    { ID: "8", TransactionType: "Withdrawal", Amount: 120.00, TransactionDate: new Date(), Description: "Grocery shopping", Status: "Failed" },
    { ID: "9", TransactionType: "Deposit", Amount: 320.00, TransactionDate: new Date(), Description: "Refund from store", Status: "Completed" },
    { ID: "10", TransactionType: "Transfer", Amount: 70.00, TransactionDate: new Date(), Description: "Sent money to family", Status: "Completed" },
    { ID: "11", TransactionType: "Deposit", Amount: 500.00, TransactionDate: new Date(), Description: "Freelance project payment", Status: "Completed" },
    { ID: "12", TransactionType: "Withdrawal", Amount: 200.00, TransactionDate: new Date(), Description: "Restaurant bill", Status: "Failed" },
    { ID: "13", TransactionType: "Transfer", Amount: 1500.00, TransactionDate: new Date(), Description: "Loan repayment", Status: "Failed" },
    { ID: "14", TransactionType: "Deposit", Amount: 1000.00, TransactionDate: new Date(), Description: "Gift from family", Status: "Completed" },
    { ID: "15", TransactionType: "Withdrawal", Amount: 300.00, TransactionDate: new Date(), Description: "Car repair", Status: "Completed" },
    { ID: "16", TransactionType: "Transfer", Amount: 200.00, TransactionDate: new Date(), Description: "Transfer to emergency fund", Status: "Pending" },
    { ID: "17", TransactionType: "Deposit", Amount: 100.00, TransactionDate: new Date(), Description: "PayPal deposit", Status: "Completed" },
    { ID: "18", TransactionType: "Withdrawal", Amount: 50.00, TransactionDate: new Date(), Description: "Cinema tickets", Status: "Completed" },
    { ID: "19", TransactionType: "Transfer", Amount: 200.00, TransactionDate: new Date(), Description: "Paid for subscription", Status: "Failed" },
    { ID: "20", TransactionType: "Deposit", Amount: 250.00, TransactionDate: new Date(), Description: "Birthday gift", Status: "Completed" },
    { ID: "21", TransactionType: "Withdrawal", Amount: 1000.00, TransactionDate: new Date(), Description: "Vacation booking", Status: "Completed" },
    { ID: "22", TransactionType: "Transfer", Amount: 75.00, TransactionDate: new Date(), Description: "Online shopping", Status: "Completed" },
    { ID: "23", TransactionType: "Deposit", Amount: 500.00, TransactionDate: new Date(), Description: "Freelance project", Status: "Completed" },
    { ID: "24", TransactionType: "Withdrawal", Amount: 150.00, TransactionDate: new Date(), Description: "Hotel stay", Status: "Failed" },
    { ID: "25", TransactionType: "Transfer", Amount: 400.00, TransactionDate: new Date(), Description: "Gift for partner", Status: "Completed" },
    { ID: "26", TransactionType: "Deposit", Amount: 600.00, TransactionDate: new Date(), Description: "Bonus", Status: "Completed" },
    { ID: "27", TransactionType: "Withdrawal", Amount: 80.00, TransactionDate: new Date(), Description: "Coffee shop", Status: "Completed" },
    { ID: "28", TransactionType: "Transfer", Amount: 550.00, TransactionDate: new Date(), Description: "Rent payment", Status: "Completed" },
    { ID: "29", TransactionType: "Deposit", Amount: 200.00, TransactionDate: new Date(), Description: "Freelance project", Status: "Pending" },
    { ID: "30", TransactionType: "Withdrawal", Amount: 120.00, TransactionDate: new Date(), Description: "Lunch with friends", Status: "Completed" },
    { ID: "31", TransactionType: "Transfer", Amount: 75.00, TransactionDate: new Date(), Description: "Money sent to parent", Status: "Failed" },
    { ID: "32", TransactionType: "Deposit", Amount: 230.00, TransactionDate: new Date(), Description: "Stock sale proceeds", Status: "Completed" },
    { ID: "33", TransactionType: "Withdrawal", Amount: 50.00, TransactionDate: new Date(), Description: "Taxis", Status: "Completed" },
    { ID: "34", TransactionType: "Transfer", Amount: 150.00, TransactionDate: new Date(), Description: "Paid for shopping", Status: "Completed" },
    { ID: "35", TransactionType: "Deposit", Amount: 500.00, TransactionDate: new Date(), Description: "Dividend income", Status: "Completed" },
    { ID: "36", TransactionType: "Withdrawal", Amount: 80.00, TransactionDate: new Date(), Description: "Sports equipment", Status: "Completed" },
    { ID: "37", TransactionType: "Transfer", Amount: 1300.00, TransactionDate: new Date(), Description: "Savings transfer", Status: "Pending" },
    { ID: "38", TransactionType: "Deposit", Amount: 400.00, TransactionDate: new Date(), Description: "Sale of product", Status: "Completed" },
    { ID: "39", TransactionType: "Withdrawal", Amount: 200.00, TransactionDate: new Date(), Description: "Fitness club membership", Status: "Completed" },
    { ID: "40", TransactionType: "Transfer", Amount: 300.00, TransactionDate: new Date(), Description: "Paid for utilities", Status: "Completed" },
    { ID: "41", TransactionType: "Deposit", Amount: 450.00, TransactionDate: new Date(), Description: "Freelance project", Status: "Completed" },
    { ID: "42", TransactionType: "Withdrawal", Amount: 150.00, TransactionDate: new Date(), Description: "Vacation expenses", Status: "Completed" },
    { ID: "43", TransactionType: "Transfer", Amount: 600.00, TransactionDate: new Date(), Description: "Transferred to savings", Status: "Completed" },
    { ID: "44", TransactionType: "Deposit", Amount: 700.00, TransactionDate: new Date(), Description: "Gift from relatives", Status: "Completed" },
    { ID: "45", TransactionType: "Withdrawal", Amount: 500.00, TransactionDate: new Date(), Description: "Laptop purchase", Status: "Completed" },
    { ID: "46", TransactionType: "Transfer", Amount: 900.00, TransactionDate: new Date(), Description: "Paying off credit card", Status: "Completed" },
    { ID: "47", TransactionType: "Deposit", Amount: 1200.00, TransactionDate: new Date(), Description: "Salary", Status: "Completed" },
    { ID: "48", TransactionType: "Withdrawal", Amount: 300.00, TransactionDate: new Date(), Description: "Restaurant dinner", Status: "Completed" },
    { ID: "49", TransactionType: "Transfer", Amount: 50.00, TransactionDate: new Date(), Description: "Money for charity", Status: "Completed" },
    { ID: "50", TransactionType: "Deposit", Amount: 800.00, TransactionDate: new Date(), Description: "Contract payment", Status: "Completed" }
];

function Transactions() {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 14;

    const totalPages = Math.ceil(recentTransactionsSimulation.length / pageSize);

    const startIndex = (currentPage - 1) * pageSize;
    const transactionsToShow = recentTransactionsSimulation.slice(startIndex, startIndex + pageSize);

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="transactions-container">
            <MenuComponent />
            <div className="transactions">
                <div className="recent-transactions">
                    <div className="recent-transactions-content">
                        <h2 className="recent-transactions-content-title">Recent Transactions</h2>
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

                        {/* Pagination Controls */}
                        <div className="pagination">
                            <button 
                                onClick={goToPreviousPage} 
                                disabled={currentPage === 1} 
                                className="pagination-button"
                            >
                                Previous
                            </button>
                            <span className="pagination-info">
                                Page {currentPage} of {totalPages}
                            </span>
                            <button 
                                onClick={goToNextPage} 
                                disabled={currentPage === totalPages} 
                                className="pagination-button"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Transactions;
