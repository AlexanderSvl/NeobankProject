import React, { useEffect, useState } from 'react';
import MenuComponent from '../MenuComponent/menu';  // Import the MenuComponent
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './investing.css';
import MockStockData from '../MockDataComponent/mockStockData';  // Import the mock data generator

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const InvestingComponent = () => {
    const [chartData, setChartData] = useState(null);  // Chart data state
    const [loading, setLoading] = useState(true);  // Loading state to track data loading process
    const symbol = 'NVDA';  // You can change this to any symbol

    useEffect(() => {
        // Use the MockStockData to generate mock data
        const generateMockData = () => {
            const mockData = MockStockData(symbol);  // Generate mock data
            setChartData({
                labels: mockData.map(item => item.date),
                datasets: [
                    {
                        label: `${symbol} Stock Price`,
                        data: mockData.map(item => item.close),
                        borderColor: 'rgb(73, 85, 87)',
                        backgroundColor: 'rgba(133, 193, 213, 0.85)',
                        pointBackgroundColor: 'whitesmoke',
                        fill: true,
                    },
                ],
            });
            setLoading(false);  // Set loading to false once data is loaded
        };

        generateMockData();  // Call function to generate mock data
    }, []);


    if (loading) {
        // If loading, display a loading message
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="main-container">
            <MenuComponent />  {/* Display the MenuComponent on the side */}
            <div className="investing-content">
                <h2>{symbol} Stock Data</h2>
                <div className="stock-chart-data">
                    <Line
                        data={chartData}
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    display: true,
                                    position: 'top',
                                    labels: {
                                        color: 'whitesmoke',  
                                    },
                                },
                                title: {
                                    display: true,
                                    text: 'Stock Price (Last 30 Days)',
                                    color: 'whitesmoke'
                                },
                                tooltip: {
                                    callbacks: {
                                        label: function (context) {
                                            let label = context.dataset.label || '';
                                            if (label) {
                                                label += ': ';
                                            }
                                            label += `$${context.raw.toFixed(2)}`; 
                                            return label;
                                        }
                                    }
                                },
                            },
                            scales: {
                                x: {
                                    title: {
                                        display: true,
                                        text: 'Date',
                                        color: 'whitesmoke'
                                    },
                                    ticks: {
                                        color: 'rgba(255, 255, 255, 0.5)'
                                    }
                                },
                                y: {
                                    title: {
                                        display: true,
                                        text: 'Price (USD)',
                                        color: 'whitesmoke'
                                    },
                                    ticks: {
                                        callback: function (value) {
                                            return `$${value}`;  
                                        },
                                        color: 'rgba(255, 255, 255, 0.5)'
                                    }
                                },
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default InvestingComponent;
