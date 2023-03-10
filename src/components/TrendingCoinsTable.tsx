import React from "react";
import { TrendingCoin } from "../../typing";
import { trending } from "../data/trending/trendingCoins";

const TableRow: React.FC<{ coin: TrendingCoin }> = ({ coin }) => {
  return (
    <tr>
      <td className="p-2 whitespace-nowrap">
        <div className="flex items-center">
          <div className="max-w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
            <img
              className="rounded-full"
              src={coin.small}
              width="40"
              height="40"
              alt={coin.name}
            />
          </div>
          <div className="font-medium text-tertiary">{coin.name}</div>
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left font-bold text-tertiary">{coin.symbol}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-center">{coin.market_cap_rank}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-center font-medium text-green-500">
          {coin.price_btc.toFixed(15)} BTC
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-base text-center text-tertiary">{coin.score}</div>
      </td>
    </tr>
  );
};

const TrendingCoinsTable: React.FC = () => {
  return (
    <section className="antialiased w-full text-tertiary h-screen px-4">
      <div className=" h-full">
        {/* <!-- Table --> */}
        <div className="w-full rounded-3xl max-w-full mx-auto bg-primary border border-primary">
          <header className="px-5 py-4">
            <h2 className="font-semibold text-lg text-secondary">Trending</h2>
            <p className="text-xs text-quaternary max-w-lg">
              Top 7 trending coins on CoinGecko as searched by users in the last
              24 hours (Ordered by most popular first)
            </p>
          </header>
          {/* <HeaderTitle title="Trending" /> */}

          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-quaternary mb-5 ">
                  <tr className="">
                    <th className="px-4 py-4 whitespace-nowrap rounded-l-3xl bg-secondary">
                      <div className="font-semibold text-left">Name</div>
                    </th>
                    <th className="p-2 py-4 whitespace-nowrap bg-secondary">
                      <div className="font-semibold text-left">Symbol</div>
                    </th>
                    <th className="p-2 py-4 whitespace-nowrap bg-secondary">
                      <div className="font-semibold text-center">
                        Market Cap Rank
                      </div>
                    </th>
                    <th className="p-2 py-4 whitespace-nowrap bg-secondary">
                      <div className="font-semibold text-center">Price BTC</div>
                    </th>
                    <th className="p-2 py-4 whitespace-nowrap rounded-r-3xl bg-secondary">
                      <div className="font-semibold text-center">Score</div>
                    </th>
                  </tr>
                </thead>

                <tbody className="text-sm divide-y divide-gray-200 dark:divide-stone-700">
                  {trending.coins.map((coin) => (
                    <TableRow coin={coin.item} key={coin.item.coin_id} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingCoinsTable;
