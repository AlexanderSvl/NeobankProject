// MOCK DATA GENERATOR
//
// Created by: ALEXANDER SVL.
//
// Date: 14.11.2024
//
// This generator will accurately represent real stock market data, daily fluctuations, etc. 
// It will be used widely in this application for the sake of data visualisation. This generator
// can also be used for mocking crypto data. 
//
// The trend can be upward, downward or no trend, simulating accurately real stock price behaviour.

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

    let startingPrice = Math.floor(Math.random() * (200 - 1 + 1)) + 1;
    let trendFactor = Math.random();

    if (trendFactor < 0.4) {
        trendFactor = -1; // Downward trend (40% chance)
    } else if (trendFactor < 0.8) {
        trendFactor = 1; // Upward trend (40% chance)
    } else {
        trendFactor = 0; // No trend (20% chance)
    }
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

    return mockData;
};

export default MockStockData;
