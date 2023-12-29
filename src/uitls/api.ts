export const getCoinList = (currency: string) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=true`;

export const SingleCoin = (id: string) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const HistoricalChart = (id: string, days = 365, currency: string) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const TrendingCoins = (currency: string) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

export const getSingleCoin = (id: string) => {
  return `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`;
};
// export const getSingleCoin = (id) => {
//   return `https://api.coingecko.com/api/v3/coins/${id}`;
// };

export const getTopCoins = () => {
  return "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true";
};

export const getWatchlistCoins = (ids: string[]) => {
  const coinIds = ids.join(",");
  return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinIds}&order=market_cap_desc&per_page=100&page=1&sparkline=true`;
};

export const getTrendingCoins = () => {
  return "https://api.coingecko.com/api/v3/search/trending";
};

export const getExchanges = () => {
  return "https://api.coingecko.com/api/v3/exchanges?per_page=250&page=1";
};

export const getHistoricalChart = (
  id: string,
  days = "1",
  currency = "usd"
) => {
  return `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;
};

// 10exchanges
// https://api.coingecko.com/api/v3/exchanges?per_page=10&page=1

// for chart data
// https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=0&interval=daily

// https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=hourly
