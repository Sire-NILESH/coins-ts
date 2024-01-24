import React from "react";
import { Link } from "react-router-dom";
import { TrendingCoin } from "../../typing";
import routeConfig from "../config/routeConfig";
import useReloadTrendingCoins from "../hooks/useReloadTrendingCoins";
import { useAppSelector } from "../redux/store";
import LoadingRowsSkeleton from "./LoadingRowsSkeleton";
import NoDataErr from "./NoDataErr";

const TableRow: React.FC<{
  coin: TrendingCoin;
  onClickNavigateTo: string;
}> = ({ coin, onClickNavigateTo }) => {
  return (
    <tr className={"table-rowHover-color"}>
      <td className="p-2 whitespace-nowrap">
        <Link to={onClickNavigateTo}>
          <div className="flex items-center">
            <div className="w-8 min-w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
              <img
                className="rounded-full"
                src={coin.small}
                width="40"
                height="40"
                alt={coin.name}
              />
            </div>
            <div className="flex space-x-3 items-center">
              <p className="font-medium text-primary">{coin.name}</p>
              <p className="font-medium uppercase  text-tertiary">
                {" "}
                {coin.symbol}
              </p>
            </div>
          </div>
        </Link>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left font-bold text-tertiary">{coin.symbol}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-center">{coin.market_cap_rank}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-center font-medium text-green-600 dark:text-green-500">
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
  const {
    isLoading,
    data: allTrendingCoins,
    isError,
  } = useAppSelector((state) => state.allTrendingCoins);

  const reloadTrendingCoins = useReloadTrendingCoins();

  const dataIsAvailable = allTrendingCoins && allTrendingCoins?.coins.length;

  if (!isLoading && isError && !dataIsAvailable) {
    return (
      <div className="h-full w-full overflow-hidden flex items-center justify-center">
        <NoDataErr reloadHandler={reloadTrendingCoins} />
      </div>
    );
  }

  return (
    <>
      <section className="antialiased w-full text-tertiary md:px-4">
        <div className="h-full space-y-10">
          {/* <!-- Table --> */}
          <div className="w-full rounded-3xl max-w-full mx-auto bg-primary border border-gray-200 dark:border-primary">
            <header className="px-5 py-4">
              <h2 className="font-semibold text-lg text-secondary">Trending</h2>
              <p className="text-xs text-tertiary max-w-lg">
                {
                  "Top trending coins on CoinGecko as searched by users in the last 24 hours."
                }
                <br />
                {"(Ordered by most popular first)"}
              </p>
            </header>

            <div className="p-3">
              <div className="overflow-x-auto">
                {/* loading skeleton */}
                <LoadingRowsSkeleton isLoading={isLoading} rowCount={9} />

                {dataIsAvailable && !isLoading && (
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
                          <div className="font-semibold text-center">
                            Price BTC
                          </div>
                        </th>
                        <th className="p-2 py-4 whitespace-nowrap rounded-r-3xl bg-secondary">
                          <div className="font-semibold text-center">Score</div>
                        </th>
                      </tr>
                    </thead>

                    <tbody className="text-sm divide-y divide-gray-200 dark:divide-gray-700">
                      {allTrendingCoins.coins.map((coin) => (
                        <TableRow
                          onClickNavigateTo={`${routeConfig.routeLinking.coin.path}/${coin.item.id}`}
                          coin={coin.item}
                          key={coin.item.coin_id}
                        />
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingCoinsTable;
