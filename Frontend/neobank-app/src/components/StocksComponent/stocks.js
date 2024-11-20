import React, { useEffect, useState } from 'react';
import MenuComponent from '../MenuComponent/menu';  // Import the MenuComponent
import './stocks.css';
import { Link } from 'react-router-dom';

const stockNewsSimulation = [
    {
        ID: "1",
        title: "NVDA Stock Plunges After Recent Discovery",
        description: "NVIDIA's stock experienced a significant drop following the revelation of vulnerabilities in its latest AI hardware. Industry analysts suggest that this discovery could impact the company's market dominance, as competitors are swiftly capitalizing on the situation. The report highlighted weaknesses in production scalability and performance optimization, raising concerns among investors. However, some experts believe that NVIDIA's innovative track record might allow it to overcome this hurdle with timely fixes and robust strategies.",
        date: "20-11-2024"
    },
    {
        ID: "2",
        title: "Tech Stocks Surge Amid Optimistic Market Sentiment",
        description: "Major tech stocks saw a sharp rise as the market responded positively to reports of improved economic indicators and promising corporate earnings. Companies such as Apple, Microsoft, and Google led the rally, showcasing resilience in the face of global economic uncertainties. Analysts highlight that the sector's sustained growth is driven by advancements in AI, cloud computing, and consumer electronics. This rally provides a renewed sense of confidence for investors who have weathered volatile market trends in recent months.",
        date: "20-11-2024"
    },
    {
        ID: "3",
        title: "EV Market Faces Headwinds As Raw Material Costs Soar",
        description: "Electric vehicle manufacturers are grappling with rising costs of raw materials, particularly lithium and cobalt, leading to increased production expenses. Tesla, Rivian, and traditional automakers are facing pressure to maintain profitability while offering competitive pricing. Experts caution that these challenges could slow EV adoption rates unless sustainable sourcing methods or cost-efficient technologies emerge. Despite the hurdles, the long-term outlook for the EV market remains optimistic, driven by growing environmental awareness and supportive government policies.",
        date: "20-11-2024"
    }
    // {
    //     ID: "4",
    //     title: "Meta Unveils Groundbreaking AI-Powered Collaboration Tool",
    //     description: "Meta Platforms has introduced a cutting-edge AI-powered collaboration tool aimed at transforming workplace productivity. The tool integrates seamlessly with existing communication platforms, leveraging machine learning to automate routine tasks, optimize workflows, and enhance team collaboration. Initial reviews highlight its intuitive interface and powerful analytics capabilities, positioning Meta as a strong contender in the enterprise software market. The release marks another step in Meta's broader strategy to diversify its offerings beyond social media.",
    //     date: "20-11-2024"
    // },
    // {
    //     ID: "5",
    //     title: "Global Semiconductor Industry Braces for Recovery in 2025",
    //     description: "The semiconductor industry is cautiously optimistic about a recovery in 2025 following a challenging period marked by supply chain disruptions and geopolitical tensions. Companies like Intel and TSMC are ramping up efforts to expand production capacity and diversify supply chains. Experts suggest that upcoming innovations in 3nm chips and AI-optimized processors could reinvigorate the market. However, the industry must navigate ongoing challenges, including fluctuating demand and regulatory hurdles, to achieve sustainable growth.",
    //     date: "20-11-2024"
    // }
];

function formatDate(dateString) {
    const dateParts = dateString.split("-"); 
    const [day, month, year] = dateParts.map(Number); 
    const date = new Date(year, month - 1, day); 
    
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
}

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
            { symbol: 'CSCO', name: 'Cisco Systems Inc.', movement: (Math.random() * 10 - 5).toFixed(2) },
            { symbol: 'ITUB', name: 'Itaú Unibanco Holding S.A.', movement: (Math.random() * 10 - 5).toFixed(2) }
        ];
        setStockData(mockData);
    }, []);

    return (
        <div className="stocks-main-container">
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
            <div className="stock-news">
                <h1 className="stock-news-heading">News</h1>
                <div className="news-list">
                    {stockNewsSimulation.map((newsItem) => (
                        <div key={newsItem.ID} className="news-item">
                            <h2 className="news-title">{newsItem.title}</h2>
                            <p className="news-description">{newsItem.description}</p>
                            <span className="news-date">{formatDate(newsItem.date)}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default StocksComponent;
