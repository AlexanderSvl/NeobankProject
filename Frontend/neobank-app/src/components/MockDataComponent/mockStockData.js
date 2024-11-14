// MOCK DATA GENERATOR
//
// Created by: ALEXANDER SVL.
//
// Date: 14.11.2024
//
// This generator will accurately represent real stock market data, daily fluctuations, etc. 
// It will be used widely in this application for the sake of data visualisation. This generator
// can also be used for mocking crypto data. 

const generateRandomPriceChange = (previousPrice) => {
    // Generate a small random change for the price, this is usually a percentage change
    const volatility = 0.02; // 2% max daily fluctuation
    const change = (Math.random() * 2 - 1) * volatility * previousPrice; // Random change within +/-2%
    return previousPrice + change;
};

// React component to generate mock stock data for the last 30 days
const MockStockData = () => {
    const today = new Date();
    const mockData = [];
    
    let startingPrice = 200;  // Set a starting price (initial closing price) for the stock
    let trendFactor = Math.random() < 0.5 ? -1 : 1;  // Randomly choose an upward or downward trend (up or down)

    for (let i = 30; i > 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);  // Go back by i days
        const formattedDate = date.toLocaleDateString();  // Format date

        // Generate the next price change based on the previous price
        startingPrice = generateRandomPriceChange(startingPrice);
        
        // Apply a slight trend to the price (trend factor)
        startingPrice += trendFactor * (Math.random() * 2);  // Add a little randomness based on the trend
        
        // Ensure price does not go negative
        startingPrice = Math.max(0, startingPrice.toFixed(2));

        const closePrice = startingPrice;
        const highPrice = (parseFloat(closePrice) + (Math.random() * 2)).toFixed(2);  // High is a bit above the close price
        const lowPrice = (parseFloat(closePrice) - (Math.random() * 2)).toFixed(2);  // Low is a bit below the close price

        mockData.push({
            date: formattedDate,
            close: closePrice,
            high: highPrice,
            low: lowPrice,
        });
    }

    return mockData.reverse();  // Reverse data to show from oldest to newest
};

export default MockStockData;
