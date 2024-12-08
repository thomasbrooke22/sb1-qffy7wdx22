import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
});

export const getCryptoRates = async () => {
  const response = await api.get('/simple/price', {
    params: {
      ids: 'bitcoin,ethereum,binancecoin',
      vs_currencies: 'usd',
      include_24hr_change: true,
    },
  });
  return response.data;
};