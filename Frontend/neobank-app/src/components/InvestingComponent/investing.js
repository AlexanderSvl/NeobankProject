import React, { useEffect, useState } from 'react';
import MenuComponent from '../MenuComponent/menu';  // Import the MenuComponent
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './investing.css';

const InvestingComponent = () => {
    return (
        <div className="main-container">
            <MenuComponent /> 
            <div className="investing-content">
                <h2>Investing</h2>
            </div>
        </div>
    );
};

export default InvestingComponent;
