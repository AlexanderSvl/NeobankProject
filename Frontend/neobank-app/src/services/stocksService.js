import axios from 'axios';

const API_URL = 'https://query1.finance.yahoo.com/v8/finance/chart/';

export const fetchStockData = async (symbol) => {
    const response = await axios.get(`${API_URL}${symbol}?interval=1d&range=1mo`);
    return response.data.chart.result[0];
};