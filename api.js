const axios = require('axios');

const COINGECKO_API_KEY = process.env.COINGECKO_API_KEY;

const getCoinData = async (coinId) => {
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`, {
      headers: {
        'Accepts': 'application/json',
        'X-Requested-With': 'CoinGecko'
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getCoinData };
