import React, { useEffect, useState } from 'react';
import MenuComponent from '../MenuComponent/menu';  
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './investing.css';
import MockStockData from '../MockDataComponent/mockStockData'; 

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const InvestingComponent = () => {
    const [chartData, setChartData] = useState(null);
    const symbol = 'NVDA';  // You can change this to any symbol

    useEffect(() => {
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
        };

        generateMockData(); 
    }, []);

    return (
        <div className="main-container">
            <MenuComponent />
            <div className="investing-content">
                <h2>{symbol} Stock Data</h2>
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
                        },
                        scales: {
                            x: {
                                title: { 
                                    display: true, 
                                    text: 'Date', 
                                    color: 'whitesmoke' 
                                },
                                ticks: { 
                                    color: 'rgba(255, 255, 255, 0.199)' 
                                }
                            },
                            y: {
                                title: { 
                                    display: true, 
                                    text: 'Price (USD)', 
                                    color: 'whitesmoke' 
                                },
                                ticks: { 
                                    color: 'rgba(255, 255, 255, 0.199)' 
                                }
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default InvestingComponent;
