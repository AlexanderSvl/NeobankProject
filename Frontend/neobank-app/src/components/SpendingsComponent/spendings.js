import React, { useEffect, useRef } from 'react';
import './spendings.css';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';  
import MenuComponent from '../MenuComponent/menu';
import { height } from 'dom-helpers';

function Spendings() {
    const chartRef = useRef(null); 

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        // Sample data for spending every 3 days in a month
        const spendingsData = {
            labels: [
                'Day 3', 'Day 6', 'Day 9', 'Day 12', 'Day 15', 
                'Day 18', 'Day 21', 'Day 24', 'Day 27', 'Day 30'
            ],
            datasets: [
                {
                    label: 'Spendings',
                    data: [100, 200, 210.99, 210.99, 340, 342.50, 380.63, 401.24, 401.24, 541.45],
                    fill: false,
                    borderColor: 'rgba(255, 255, 255, 0.8)',  
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',  
                    tension: 0.2,  
                },
            ],
        };
        
        const config = {
            type: 'line',
            data: spendingsData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            color: 'whitesmoke',
                            boxHeight: 0.5
                        }
                    },
                    // title: {
                    //     display: true,
                    //     text: 'Monthly Spendings (every 3 days)',
                    //     color: 'whitesmoke'
                    // },
                    tooltip: {  
                        callbacks: {
                            label: function (context) {
                                const label = context.dataset.label || '';
                                const value = context.raw;  
                                return `${label}: $${value.toFixed(2)}`;
                            }
                        },
                    },
                    // datalabels: {  // Config for Data Labels (if you still want them displayed)
                    //     color: 'whitesmoke',   
                    //     anchor: 'end',         
                    //     align: 'top',          
                    //     font: {
                    //         weight: 'bold'
                    //     },
                    //     formatter: (value) => `$${value.toFixed(2)}`,  // Format values as currency
                    // }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            color: 'whitesmoke'
                        },
                        ticks: {
                            color: 'whitesmoke'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            color: 'whitesmoke'
                        },
                        ticks: {
                            color: 'whitesmoke'
                        }
                    },
                },
            },
            // plugins: [ChartDataLabels],  // Register the Data Labels plugin
        };
        
        const spendingsChart = new Chart(ctx, config);

        return () => {
            spendingsChart.destroy();
        };
    }, []);

    return (
        <div className="spendings-container">
            <MenuComponent />
            <div className="spendings-content">
            <h1>Last month spendings</h1>
                <div className="chart-wrapper">
                    <canvas ref={chartRef}></canvas>
                </div>
            </div>
        </div>
    );
}

export default Spendings;
