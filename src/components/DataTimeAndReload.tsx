import React, { useCallback, useMemo, useState } from "react";
import { useAppSelector } from "../redux/store";
import HeaderButton from "./ui/HeaderButton";
import {
  selectExchnagesIsLoading,
  selectExchnagesTimeStamp,
} from "../redux/exchangesSlice";
import {
  selectTopCoinsIsLoading,
  selectTopCoinsTimeStamp,
} from "../redux/topCoinsSlice";
import {
  selectTrendingCoinsIsLoading,
  selectTrendingCoinsTimeStamp,
} from "../redux/trendingCoinsSlice";
import appIcons from "../config/appIcons";
import { useLocation } from "react-router-dom";
import routeConfig from "../config/routeConfig";
import useReloadTopCoins from "../hooks/useReloadTopCoins";
import useReloadTrendingCoins from "../hooks/useReloadTrendingCoins";
import useReloadExchanges from "../hooks/useReloadExchanges";
import useReloadData from "../hooks/useReloadData";
import {
  selectWatchlistCoinsIsLoading,
  selectWatchlistCoinsTimestamp,
} from "../redux/watchlistSlice";
import useReloadWatchlist from "../hooks/useReloadWatchlist";

interface IProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const DataTimeAndReload: React.FC<IProps> = () => {
  const { pathname } = useLocation();
  const [minLoadingTime, setMinLoadingTime] = useState<boolean>(false);

  const reloadTopCoins = useReloadTopCoins();
  const reloadTrendingCoins = useReloadTrendingCoins();
  const reloadExchanges = useReloadExchanges();
  const reloadWatchlist = useReloadWatchlist();
  const reloadOverallData = useReloadData();

  const topCoinsTime = useAppSelector(selectTopCoinsTimeStamp);
  const trendingCoinsTime = useAppSelector(selectTrendingCoinsTimeStamp);
  const exchangesTime = useAppSelector(selectExchnagesTimeStamp);
  const watchlistTime = useAppSelector(selectWatchlistCoinsTimestamp);
  const { time: overallDatatime } = useAppSelector(
    (state) => state.dataFetchTime
  );

  const getReloadData = useCallback(
    function (pathname: string) {
      const routes = routeConfig.routeLinking;
      let reload: {
        time: Date;
        reloadFn: null | (() => void);
      } = { time: new Date(overallDatatime), reloadFn: reloadOverallData };

      switch (pathname) {
        case routes.overview.path:
          reload = {
            time: new Date(overallDatatime),
            reloadFn: reloadOverallData,
          };
          break;

        case routes.trending.path:
          reload = {
            time: new Date(trendingCoinsTime),
            reloadFn: reloadTrendingCoins,
          };
          break;

        case routes.exchanges.path:
          reload = { time: new Date(exchangesTime), reloadFn: reloadExchanges };
          break;

        case routes.topCoins.path:
          reload = { time: new Date(topCoinsTime), reloadFn: reloadTopCoins };
          break;

        case routes.watchlist.path:
          reload = { time: new Date(watchlistTime), reloadFn: reloadWatchlist };
          break;

        default:
          reload = { time: new Date(Date.now()), reloadFn: null };
          break;
      }

      return reload;
    },
    [
      overallDatatime,
      reloadOverallData,
      trendingCoinsTime,
      reloadTrendingCoins,
      exchangesTime,
      reloadExchanges,
      topCoinsTime,
      reloadTopCoins,
      watchlistTime,
      reloadWatchlist,
    ]
  );

  const reloadData = useMemo(
    () => getReloadData(pathname),
    [getReloadData, pathname]
  );

  const exchangesIsLoading = useAppSelector(selectExchnagesIsLoading);
  const topCoinsIsLoading = useAppSelector(selectTopCoinsIsLoading);
  const trendingCoinsIsLoading = useAppSelector(selectTrendingCoinsIsLoading);
  const watchlistCoinsIsLoading = useAppSelector(selectWatchlistCoinsIsLoading);

  const startMinLoadingTime = () => {
    setMinLoadingTime(true);

    setTimeout(() => {
      setMinLoadingTime(false);
    }, 1000);
  };

  const overallLoading =
    exchangesIsLoading ||
    trendingCoinsIsLoading ||
    topCoinsIsLoading ||
    watchlistCoinsIsLoading ||
    minLoadingTime;

  const isReloadType = reloadData.reloadFn !== null;

  return (
    <div className={"flex items-center justify-center space-x-2 xl:space-x-8"}>
      <button
        disabled={overallLoading}
        onClick={() => {
          if (reloadData.reloadFn) {
            startMinLoadingTime();
            reloadData.reloadFn();
          }
        }}
        className={`px-2 md:px-4 py-1 rounded-lg flex space-x-2 items-center hover:bg-secondary transition-colors duration-300 ease-in-out ${
          !isReloadType ? "hover:cursor-default" : "hover:cursor-pointer"
        } ${overallLoading ? "!cursor-not-allowed" : ""}`}
      >
        {isReloadType ? (
          <appIcons.Refresh
            className={`h-6 w-6 font-bold mr-1 ${
              overallLoading ? " animate-spin" : ""
            }`}
          />
        ) : null}
        <p className="hidden xl:block text-sm xl:text-base font-normal text-tertiary">
          {"As of "}
        </p>
        <p className="hidden sm:block text-sm xl:text-base font-normal text-tertiary">
          {`${reloadData.time.toDateString()}, `}
        </p>
        <p className="hidden sm:block text-sm xl:text-base font-semibold text-secondary">
          {reloadData.time.toLocaleTimeString()}
        </p>
      </button>

      <HeaderButton />
    </div>
  );
};

export default DataTimeAndReload;
