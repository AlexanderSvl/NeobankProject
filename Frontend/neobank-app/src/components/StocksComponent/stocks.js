import React, { useEffect, useState } from 'react';
import MenuComponent from '../MenuComponent/menu'; // Import the MenuComponent
import './stocks.css';
import { Link } from 'react-router-dom';

const stockNewsSimulation = [
    {
        ID: "1",
        title: "NVDA Stock Plunges After Recent Discovery",
        description: "NVIDIA's stock experienced a significant drop following the revelation of vulnerabilities in its latest AI hardware. Industry analysts suggest that this discovery could impact the company's market dominance, as competitors are swiftly capitalizing on the situation. The report highlighted weaknesses in production scalability and performance optimization, raising concerns among investors. However, some experts believe that NVIDIA's innovative track record might allow it to overcome this hurdle with timely fixes and robust strategies.",
        fullText: "Lorem ipsumLorem ipsum odor amet, consectetuer adipiscing elit. Scelerisque fermentum a ridiculus vivamus egestas himenaeos ac. In blandit etiam venenatis curabitur, libero fringilla. Ipsum nam sodales elementum, fusce massa vulputate natoque. Ex dignissim odio nam luctus ex vestibulum magna. Consectetur blandit condimentum cubilia neque hendrerit per sem. Quam augue quam lobortis pulvinar justo. Leo eros lectus convallis curabitur netus justo rutrum natoque. \n\nAt finibus adipiscing tempor porttitor proin, feugiat vestibulum vestibulum. Malesuada nulla praesent interdum donec hendrerit id maecenas id. Cras phasellus lectus maecenas vestibulum; aptent nunc eget montes. Praesent sociosqu enim litora; erat sagittis fringilla. Elit nullam volutpat vestibulum nibh neque donec proin aliquam. Luctus efficitur lacinia, dis vulputate a facilisis. Eros vitae risus diam; quisque nullam eros efficitur. Rhoncus rhoncus quisque etiam habitant dis, habitant donec. Laoreet dui dis laoreet fermentum urna tellus luctus. Primis proin primis hendrerit tellus ornare ullamcorper. Donec auctor ligula nunc porta montes lobortis conubia. Nisi et arcu varius adipiscing commodo pharetra efficitur class. Parturient cubilia mollis, interdum posuere fames taciti? Aliquam quis nunc libero quisque quisque elementum risus senectus. Morbi nisl purus consequat facilisi consectetur. Nam torquent nostra tortor malesuada mattis phasellus nunc. Turpis tempor suscipit tempor eu lorem? Venenatis natoque sapien proin nam, augue diam ullamcorper nisi. Facilisi himenaeos semper iaculis lacinia dictum; sociosqu curae. Varius dis elementum class scelerisque velit; cras porttitor fringilla. \n\nLitora sagittis purus nam egestas ante. Tristique sollicitudin euismod himenaeos; libero nunc amet gravida imperdiet. Leo nunc sed, congue porta tellus torquent. Mauris primis justo fringilla nostra orci penatibus felis. Erat in metus ultrices morbi vel urna. Ligula eget ipsum tempus conubia nascetur quisque natoque. Blandit magnis neque duis vitae habitant. Dictum habitant per nullam vestibulum vivamus lacus fermentum. Cras neque mattis fringilla fringilla sagittis finibus consectetur ex. Netus fermentum sit vitae lobortis fermentum blandit. Sapien vulputate habitasse turpis sem vehicula auctor. Arcu vulputate efficitur est nisi facilisis diam. Cras lobortis urna aenean torquent nulla ornare etiam. \n\n",
        date: "20-11-2024"
    },
    {
        ID: "2",
        title: "Tech Stocks Surge Amid Optimistic Market Sentiment",
        description: "Major tech stocks saw a sharp rise as the market responded positively to reports of improved economic indicators and promising corporate earnings. Companies such as Apple, Microsoft, and Google led the rally, showcasing resilience in the face of global economic uncertainties. Analysts highlight that the sector's sustained growth is driven by advancements in AI, cloud computing, and consumer electronics. This rally provides a renewed sense of confidence for investors who have weathered volatile market trends in recent months.",
        fullText: "Lorem ipsumLorem ipsum odor amet, consectetuer adipiscing elit. Scelerisque fermentum a ridiculus vivamus egestas himenaeos ac. In blandit etiam venenatis curabitur, libero fringilla. Ipsum nam sodales elementum, fusce massa vulputate natoque. Ex dignissim odio nam luctus ex vestibulum magna. Consectetur blandit condimentum cubilia neque hendrerit per sem. Quam augue quam lobortis pulvinar justo. Leo eros lectus convallis curabitur netus justo rutrum natoque. \n\nAt finibus adipiscing tempor porttitor proin, feugiat vestibulum vestibulum. Malesuada nulla praesent interdum donec hendrerit id maecenas id. Cras phasellus lectus maecenas vestibulum; aptent nunc eget montes. Praesent sociosqu enim litora; erat sagittis fringilla. Elit nullam volutpat vestibulum nibh neque donec proin aliquam. Luctus efficitur lacinia, dis vulputate a facilisis. Eros vitae risus diam; quisque nullam eros efficitur. Rhoncus rhoncus quisque etiam habitant dis, habitant donec. Laoreet dui dis laoreet fermentum urna tellus luctus. Primis proin primis hendrerit tellus ornare ullamcorper. Donec auctor ligula nunc porta montes lobortis conubia. Nisi et arcu varius adipiscing commodo pharetra efficitur class. Parturient cubilia mollis, interdum posuere fames taciti? Aliquam quis nunc libero quisque quisque elementum risus senectus. Morbi nisl purus consequat facilisi consectetur. Nam torquent nostra tortor malesuada mattis phasellus nunc. Turpis tempor suscipit tempor eu lorem? Venenatis natoque sapien proin nam, augue diam ullamcorper nisi. Facilisi himenaeos semper iaculis lacinia dictum; sociosqu curae. Varius dis elementum class scelerisque velit; cras porttitor fringilla. \n\nLitora sagittis purus nam egestas ante. Tristique sollicitudin euismod himenaeos; libero nunc amet gravida imperdiet. Leo nunc sed, congue porta tellus torquent. Mauris primis justo fringilla nostra orci penatibus felis. Erat in metus ultrices morbi vel urna. Ligula eget ipsum tempus conubia nascetur quisque natoque. Blandit magnis neque duis vitae habitant. Dictum habitant per nullam vestibulum vivamus lacus fermentum. Cras neque mattis fringilla fringilla sagittis finibus consectetur ex. Netus fermentum sit vitae lobortis fermentum blandit. Sapien vulputate habitasse turpis sem vehicula auctor. Arcu vulputate efficitur est nisi facilisis diam. Cras lobortis urna aenean torquent nulla ornare etiam. \n\n",
        date: "20-11-2024"
    },
    {
        ID: "3",
        title: "EV Market Faces Headwinds As Raw Material Costs Soar",
        description: "Electric vehicle manufacturers are grappling with rising costs of raw materials, particularly lithium and cobalt, leading to increased production expenses. Tesla, Rivian, and traditional automakers are facing pressure to maintain profitability while offering competitive pricing. Experts caution that these challenges could slow EV adoption rates unless sustainable sourcing methods or cost-efficient technologies emerge. Despite the hurdles, the long-term outlook for the EV market remains optimistic, driven by growing environmental awareness and supportive government policies.",
        fullText: "Lorem ipsumLorem ipsum odor amet, consectetuer adipiscing elit. Scelerisque fermentum a ridiculus vivamus egestas himenaeos ac. In blandit etiam venenatis curabitur, libero fringilla. Ipsum nam sodales elementum, fusce massa vulputate natoque. Ex dignissim odio nam luctus ex vestibulum magna. Consectetur blandit condimentum cubilia neque hendrerit per sem. Quam augue quam lobortis pulvinar justo. Leo eros lectus convallis curabitur netus justo rutrum natoque. \n\nAt finibus adipiscing tempor porttitor proin, feugiat vestibulum vestibulum. Malesuada nulla praesent interdum donec hendrerit id maecenas id. Cras phasellus lectus maecenas vestibulum; aptent nunc eget montes. Praesent sociosqu enim litora; erat sagittis fringilla. Elit nullam volutpat vestibulum nibh neque donec proin aliquam. Luctus efficitur lacinia, dis vulputate a facilisis. Eros vitae risus diam; quisque nullam eros efficitur. Rhoncus rhoncus quisque etiam habitant dis, habitant donec. Laoreet dui dis laoreet fermentum urna tellus luctus. Primis proin primis hendrerit tellus ornare ullamcorper. Donec auctor ligula nunc porta montes lobortis conubia. Nisi et arcu varius adipiscing commodo pharetra efficitur class. Parturient cubilia mollis, interdum posuere fames taciti? Aliquam quis nunc libero quisque quisque elementum risus senectus. Morbi nisl purus consequat facilisi consectetur. Nam torquent nostra tortor malesuada mattis phasellus nunc. Turpis tempor suscipit tempor eu lorem? Venenatis natoque sapien proin nam, augue diam ullamcorper nisi. Facilisi himenaeos semper iaculis lacinia dictum; sociosqu curae. Varius dis elementum class scelerisque velit; cras porttitor fringilla. \n\nLitora sagittis purus nam egestas ante. Tristique sollicitudin euismod himenaeos; libero nunc amet gravida imperdiet. Leo nunc sed, congue porta tellus torquent. Mauris primis justo fringilla nostra orci penatibus felis. Erat in metus ultrices morbi vel urna. Ligula eget ipsum tempus conubia nascetur quisque natoque. Blandit magnis neque duis vitae habitant. Dictum habitant per nullam vestibulum vivamus lacus fermentum. Cras neque mattis fringilla fringilla sagittis finibus consectetur ex. Netus fermentum sit vitae lobortis fermentum blandit. Sapien vulputate habitasse turpis sem vehicula auctor. Arcu vulputate efficitur est nisi facilisis diam. Cras lobortis urna aenean torquent nulla ornare etiam. \n\n",
        date: "20-11-2024"
    }
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
    const [isModalOpen, setModalOpen] = useState(false);
    const [activeNews, setActiveNews] = useState(null);

    const handleReadMore = (newsItem) => {
        setActiveNews(newsItem);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setActiveNews(null);
    };

    useEffect(() => {
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
                <h1 className="stock-news-heading">Latest news</h1>
                <div className="news-list">
                    {stockNewsSimulation.map((newsItem) => (
                        <div key={newsItem.ID} className="news-item">
                            <h2 className="news-title">{newsItem.title}</h2>
                            <p className="news-description">
                                {newsItem.description}
                            </p>
                            <span className="news-date">{formatDate(newsItem.date)}</span>
                            <a className="read-more" onClick={() => handleReadMore(newsItem)}>Read more...</a>
                        </div>
                    ))}
                </div>
            </div>

            { /* This is the modal for the news article. */ }
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={handleCloseModal}>&times;</span>
                        <h2 className="modal-title">{activeNews.title}</h2>
                        {activeNews.fullText.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="modal-content-paragraph">{paragraph}</p>
                        ))}
                        <span className="modal-news-date">{formatDate(activeNews.date)}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StocksComponent;