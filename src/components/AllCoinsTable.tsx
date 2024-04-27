import React from "react";
import { Link } from "react-router-dom";
import { Coin } from "../../typing";
import routeConfig from "../config/routeConfig";
import { useAppSelector } from "../redux/store";
import { formatCurrency } from "../uitls/helper";
import Search from "./ui/Search";
import appIcons from "../config/appIcons";
import useDBWatchlistActions from "../hooks/useDBWatchlistActions";
import Pagination from "./ui/Pagination";
import AppSparklines from "./AppSparklines";
import {
  selectTopCoinsData,
  selectTopCoinsIsError,
  selectTopCoinsIsLoading,
} from "../redux/topCoinsSlice";
import usePagination from "../hooks/usePagination";
import useSearch from "../hooks/useSearch";
import NoDataErr from "./NoDataErr";
import useReloadTopCoins from "../hooks/useReloadTopCoins";
import LoadingRowsSkeleton from "./LoadingRowsSkeleton";

type TableRowProps = {
  data: Coin;
  onClickNavigateTo: string;
  isCoinWatchlisted: boolean;
};

const TableRow = ({
  data,
  onClickNavigateTo,
  isCoinWatchlisted,
}: TableRowProps) => {
  return (
    <tr className={"table-rowHover-color"}>
      <td className="p-2 whitespace-nowrap">
        <button
          id="watchlist-star"
          data-coin-id={data.id}
          className="hover:bg-white dark:hover:bg-gray-900/40 h-10 w-10 m-auto rounded-full flex items-center justify-center text-center font-bold"
        >
          {isCoinWatchlisted ? appIcons.starFill : appIcons.starOutline}
        </button>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left font-bold">
          <p className="font-medium uppercase ">
            {" "}
            &nbsp; {data.market_cap_rank}
          </p>
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <Link to={onClickNavigateTo}>
          <div className="flex items-center">
            <div className="w-8 min-w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
              <img
                className="rounded-full bg-white"
                src={data.image}
                width="40"
                height="40"
                alt={data.name}
              />
            </div>
            <div className="flex space-x-3 items-center">
              <p className="font-medium">{data.name}</p>
              <p className="font-semibold uppercase"> {data.symbol}</p>
            </div>
          </div>
        </Link>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left font-medium text-green-600 dark:text-green-500">
          {`$${
            data.current_price < 10
              ? data.current_price
              : formatCurrency(data.current_price, 3)
          }`}
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div
          className={`text-left font-medium ${
            data.price_change_24h > 0
              ? "text-green-600 dark:text-green-500"
              : "text-red-500"
          }`}
        >
          {`${formatCurrency(data.price_change_24h, 3)}%`}
        </div>
      </td>

      <td className="p-2 whitespace-nowrap">
        <div className=" text-left">
          {`$${formatCurrency(data.total_volume, 1)}`}
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className=" text-left">
          {`$${formatCurrency(data.market_cap, 1)}`}
        </div>
      </td>
      <td className="p-2 min-w-[6rem] whitespace-nowrap">
        <AppSparklines data={data.sparkline_in_7d.price} sparklineFill />
      </td>
    </tr>
  );
};

const AllCoinsTable = () => {
  const allCoins = useAppSelector(selectTopCoinsData);
  const isLoading = useAppSelector(selectTopCoinsIsLoading);
  const isError = useAppSelector(selectTopCoinsIsError);

  const { isCoinWatchlisted, addToWatchlist, removeFromWatchlist } =
    useDBWatchlistActions();

  const reloadTopCoins = useReloadTopCoins();

  const searchFilter = (value: Coin, searchQuery: string): boolean => {
    return (
      value.name.toLowerCase().includes(searchQuery) ||
      value.symbol.toLowerCase().includes(searchQuery)
    );
  };

  const { setSearch, searchFilteredData } = useSearch<Coin>({
    dataList: allCoins,
    searchFilterResolver: searchFilter,
  });

  const {
    pageData,
    currentPage,
    totalEnteries,
    pageSetter,
    totalPages,
    pageEnteries,
  } = usePagination<Coin>({
    dataList: searchFilteredData,
    pageEnteries: 10, // the number of entries in each page
  });

  // handled using event delegation
  const handleStarClick = (
    event: React.MouseEvent<HTMLTableElement, MouseEvent>
  ) => {
    const target = event.target as HTMLElement;

    // Check if the clicked element is a 'star'
    if (
      target &&
      target.tagName === "BUTTON" &&
      target.id === "watchlist-star"
    ) {
      // Handle the star click
      const starClickedCoinId = target.getAttribute("data-coin-id");

      if (starClickedCoinId) {
        isCoinWatchlisted(starClickedCoinId)
          ? removeFromWatchlist(starClickedCoinId)
          : addToWatchlist(starClickedCoinId);
      }
    }
  };

  const dataIsAvailable = allCoins && allCoins?.length > 0;

  if (!isLoading && isError && !dataIsAvailable) {
    return (
      <div className="h-full w-full overflow-hidden flex items-center justify-center">
        <NoDataErr reloadHandler={reloadTopCoins} />
      </div>
    );
  }

  return (
    <div onClick={handleStarClick} className="">
      <section className="mt-5 antialiased md:px-4">
        <div className="h-full space-y-10 text-card-foreground/70">
          {/*  Table  */}
          <div className="w-full rounded-3xl max-w-full mx-auto bg-card dark:bg-secondary border border-border">
            <header className="flex flex-col gap-4 sm:flex-row items-center justify-between px-5 py-4">
              <div className="w-full">
                <h2 className="text-card-foreground font-semibold text-lg">
                  Top 250 Coins
                </h2>
                <p className="text-xs max-w-lg">
                  {
                    "A top 250 list of all the cryptocurrencies in the last 24 hours"
                  }
                  <br />
                  {"(Ordered by Market cap)"}
                </p>
              </div>
              <Search setSearch={setSearch} />
            </header>

            <div className="p-3">
              <div className="overflow-x-auto">
                {/* loading skeleton */}
                <LoadingRowsSkeleton isLoading={isLoading} rowCount={11} />

                {dataIsAvailable && !isLoading && (
                  <table
                    onClick={handleStarClick}
                    className="table-auto w-full"
                  >
                    <thead className="text-xs font-semibold uppercase text-muted-foreground/70 mb-5">
                      <tr className="">
                        <th className="px-4 py-4 whitespace-nowrap rounded-l-3xl bg-secondary dark:bg-white/10">
                          <div className="font-semibold text-left">Star</div>
                        </th>
                        <th className="p-2 py-4 whitespace-nowrap bg-secondary dark:bg-white/10">
                          <div className="font-semibold text-left">Rank</div>
                        </th>
                        <th className="p-2 py-4 whitespace-nowrap bg-secondary dark:bg-white/10">
                          <div className="font-semibold text-left">Name</div>
                        </th>
                        <th className="p-2 py-4 whitespace-nowrap bg-secondary dark:bg-white/10">
                          <div className="font-semibold text-left">Price</div>
                        </th>
                        <th className="p-2 py-4 whitespace-nowrap bg-secondary dark:bg-white/10">
                          <div className="font-semibold text-left">24H</div>
                        </th>
                        <th className="p-2 py-4 whitespace-nowrap bg-secondary dark:bg-white/10">
                          <div className="font-semibold text-left">
                            Volume (24H)
                          </div>
                        </th>
                        <th className="p-2 py-4 whitespace-nowrap bg-secondary dark:bg-white/10">
                          <div className="font-semibold text-left">
                            Market cap
                          </div>
                        </th>
                        <th className="p-2 py-4 whitespace-nowrap rounded-r-3xl bg-secondary dark:bg-white/10">
                          <div className="font-semibold text-left">Week</div>
                        </th>
                      </tr>
                    </thead>

                    <tbody className="text-sm divide-y divide-gray-200 dark:divide-gray-700">
                      {pageData.map((coin) => (
                        <TableRow
                          onClickNavigateTo={`${routeConfig.routeLinking.coin.path}/${coin.id}`}
                          data={coin}
                          key={coin.id}
                          isCoinWatchlisted={isCoinWatchlisted(coin.id)}
                        />
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>

          <Pagination
            currentPage={currentPage}
            pageSetter={pageSetter}
            pageEnteries={pageEnteries}
            totalPages={totalPages}
            totalEnteries={totalEnteries}
          />
        </div>
      </section>
    </div>
  );
};

export default AllCoinsTable;
