import React, { useEffect, useState } from 'react';
import MenuComponent from '../MenuComponent/menu';  // Import the MenuComponent
import './stocks.css';
import { Link } from 'react-router-dom';

const StocksComponent = () => {
    const [stockData, setStockData] = useState([]);

    useEffect(() => {
        // Mock stock data with random percentage movements
        const mockData = [
            { symbol: 'AAPL', name: 'Apple Inc.', movement: (Math.random() * 10 - 5).toFixed(2) },
            { symbol: 'GOOGL', name: 'Alphabet Inc.', movement: (Math.random() * 10 - 5).toFixed(2) },
            { symbol: 'AMZN', name: 'Amazon.com Inc.', movement: (Math.random() * 10 - 5).toFixed(2) },
            { symbol: 'TSLA', name: 'Tesla Inc.', movement: (Math.random() * 10 - 5).toFixed(2) },
            { symbol: 'MSFT', name: 'Microsoft Corp.', movement: (Math.random() * 10 - 5).toFixed(2) },
            { symbol: 'NFLX', name: 'Netflix Inc.', movement: (Math.random() * 10 - 5).toFixed(2) },
            { symbol: 'NVDA', name: 'NVIDIA Corp.', movement: (Math.random() * 10 - 5).toFixed(2) },
            { symbol: 'INTC', name: 'Intel Corp.', movement: (Math.random() * 10 - 5).toFixed(2) },
            { symbol: 'AMD', name: 'Advanced Micro Devices Inc.', movement: (Math.random() * 10 - 5).toFixed(2) },
            { symbol: 'JPM', name: 'JPMorgan Chase & Co.', movement: (Math.random() * 10 - 5).toFixed(2) },
            { symbol: 'DIS', name: 'Walt Disney Co.', movement: (Math.random() * 10 - 5).toFixed(2) },
            { symbol: 'PYPL', name: 'PayPal Holdings Inc.', movement: (Math.random() * 10 - 5).toFixed(2) },
            { symbol: 'CSCO', name: 'Cisco Systems Inc.', movement: (Math.random() * 10 - 5).toFixed(2) }
        ];
        setStockData(mockData);
    }, []);

    return (
        <div className="main-container">
            <MenuComponent />
            <div className="stocks-content">
                <div className="top-movers">
                    <h1 id="top-movers">Most traded stocks</h1>
                    <ul>
                        {stockData.map((stock, index) => (
                            <li key={index} className="stock-item">
                                <span className="stock-symbol">                                   
                                    <Link to={`/stocks/${stock.symbol}`} className="no-link-style">{stock.symbol}</Link>
                                </span>
                                <span className="stock-name">
                                    <Link to={`/stocks/${stock.symbol}`} className="no-link-style">{stock.name}</Link>
                                </span>
                                <span
                                    className="stock-movement"
                                    style={{
                                        backgroundColor: stock.movement > 0 
                                            ? '#a8dfc1' 
                                            : stock.movement < 0
                                                ? '#f5b5b7' 
                                                : '#cfd2d6', 
                                        color: 'black',
                                        padding: '0.25rem 0.5rem',
                                        borderRadius: '4px',
                                    }}
                                >
                                    {stock.movement > 0 ? `+${stock.movement}%` : `${stock.movement}%`}
                                </span>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default StocksComponent;
