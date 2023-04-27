export const getCoinList = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=true`;

export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const HistoricalChart = (id, days = 365, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const TrendingCoins = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

export const getTopCoins = () => {
  return "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true";
};

export const getTrendingCoins = () => {
  return "https://api.coingecko.com/api/v3/search/trending";
};

export const getExchanges = () => {
  return "https://api.coingecko.com/api/v3/exchanges?per_page=100&page=1";
};

// 10exchanges
// https://api.coingecko.com/api/v3/exchanges?per_page=10&page=1

// for chart data
// https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=0&interval=daily
