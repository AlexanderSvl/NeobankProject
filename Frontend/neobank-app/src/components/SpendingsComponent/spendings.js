import React, { useEffect, useRef } from 'react';
import './spendings.css';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';
import MenuComponent from '../MenuComponent/menu';

function Spendings() {
    const chartRef = useRef(null); 
    const doghnutRef = useRef(null);  
    const barChartRef = useRef(null);
    const legendRef = useRef(null);

    useEffect(() => {
        // Line chart setup for daily spendings
        const ctx = chartRef.current.getContext('2d');

        const spendingsData = {
            labels: ['Day 3', 'Day 6', 'Day 9', 'Day 12', 'Day 15', 'Day 18', 'Day 21', 'Day 24', 'Day 27', 'Day 30'],
            datasets: [{
                label: 'Spendings',
                data: [100, 200, 210.99, 210.99, 340, 342.50, 380.63, 401.24, 401.24, 541.45],
                fill: false,
                borderColor: 'rgba(255, 255, 255, 0.8)',  
                backgroundColor: 'rgba(255, 255, 255, 0.6)',  
                tension: 0.0,
            }],
        };

        const lineChartConfig = {
            type: 'line',
            data: spendingsData,
            options: {
                responsive: true,
                animation: {
                    duration: 2000, 
                    easing: 'easeInOutQuad',
                },
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: { color: 'whitesmoke' }
                    },
                    tooltip: {  
                        callbacks: {
                            label: (context) => `${context.dataset.label}: $${context.raw.toFixed(2)}`,
                        },
                    },
                },
                scales: {
                    x: { ticks: { color: 'whitesmoke' } },
                    y: { ticks: { color: 'whitesmoke' } },
                },
            },
        };
        
        const spendingsChart = new Chart(ctx, lineChartConfig);

        // Doughnut chart setup for spendings by category
        const doghnutCtx = doghnutRef.current.getContext('2d');
        const doghnutChartData = {
            labels: ['Rent', 'Groceries', 'Utilities', 'Entertainment', 'Others'],
            datasets: [{
                data: [500, 200, 100, 80, 120],
                backgroundColor: [
                    'rgba(133, 193, 213, 0.85)',
                    'rgba(171, 178, 185, 0.85)',
                    'rgba(184, 233, 148, 0.85)',
                    'rgba(243, 156, 18, 0.85)',
                    'rgba(155, 89, 182, 0.85)',
                ],
            }],
        };

        const doghnutChartConfig = {
            type: 'doughnut',
            data: doghnutChartData,
            options: {
                responsive: true,
                animation: {
                    duration: 1500,
                    easing: 'easeInOutQuad',
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: (context) => `${context.label}: $${context.raw.toFixed(2)}`,
                        },
                    },
                },
            },
        };

        const doghnutChart = new Chart(doghnutCtx, doghnutChartConfig);

        const barCtx = barChartRef.current.getContext('2d');

        // Create gradient background for bars
        const gradient = barCtx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(52, 152, 219, 0.9)'); // Top color
        gradient.addColorStop(1, 'rgba(133, 193, 233, 0.5)'); // Bottom color

        const barChartData = {
            labels: ['June', 'July', 'August', 'September', 'October', 'November'],
            datasets: [{
                label: 'Monthly Spendings',
                data: [1221.65, 1452.42, 1023.43, 1845.32, 1312.65, 1429.14],
                backgroundColor: 'rgba(133, 193, 213, 0.85)'
            }],
        };

        const barChartConfig = {
            type: 'bar',
            data: barChartData,
            options: {
                responsive: true,
                animation: {
                    duration: 1500,
                    easing: 'easeInOutQuad',
                },
                plugins: {
                    legend: { display: true, labels: { color: 'whitesmoke', font: {size: 15} }},
                    tooltip: {
                        callbacks: {
                            label: (context) => `${context.dataset.label}: $${context.raw.toFixed(2)}`,
                        },
                    },
                },
                scales: {
                    x: { 
                        ticks: { color: 'whitesmoke' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }, // Light grid lines
                    },
                    y: { 
                        ticks: { color: 'whitesmoke' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }, // Light grid lines
                    },
                },
            },
        };

        const barChart = new Chart(barCtx, barChartConfig);

        // Custom legend for doughnut chart
        const createCustomLegend = () => {
            if (legendRef.current) {
                const legendItems = doghnutChartData.labels.map((label, index) => {
                    const color = doghnutChartData.datasets[0].backgroundColor[index];
                    return `<li style="display: flex; align-items: center; margin-bottom: 4px;">
                                <span style="width: 12px; height: 12px; background-color: ${color}; display: inline-block; border-radius: 50%; margin-right: 8px;"></span>
                                <span style="color: whitesmoke;">${label}</span>
                            </li>`;
                }).join('');
                
                legendRef.current.innerHTML = `<ul style="list-style: none; padding: 0; margin: 0;">${legendItems}</ul>`;
            }
        };

        createCustomLegend();  // Generate and insert the custom legend

        // Cleanup on unmount
        return () => {
            spendingsChart.destroy();
            doghnutChart.destroy();
            barChart.destroy();
        };

    }, []);

    return (
        <div className="spendings-container">
            <MenuComponent />
            <div className="spendings-content">
                <h1 className="spendings-content-title">Last month spendings</h1>
                <div className="chart-wrapper">
                    <canvas ref={chartRef}></canvas>
                </div>
                <div className="pie-chart-inline-container">
                    <div className="pie-chart-wrapper">
                        <canvas ref={doghnutRef}></canvas>
                    </div>
                    <div className="pie-chart-info-wrapper" ref={legendRef}></div>
                    <div className="bar-chart-wrapper">
                        <canvas ref={barChartRef}></canvas>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Spendings;