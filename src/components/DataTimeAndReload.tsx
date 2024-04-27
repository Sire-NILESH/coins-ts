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
import { formatDistance } from "date-fns";

interface IProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

function getRelativeDate(current: number, past: number) {
  const relativeDate = formatDistance(current, past);

  return relativeDate;
}

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
        time: number;
        reloadFn: null | (() => void);
      } = {
        time: overallDatatime,
        reloadFn: reloadOverallData,
      };

      switch (pathname) {
        case routes.overview.path:
          reload = {
            time: overallDatatime,
            reloadFn: reloadOverallData,
          };
          break;

        case routes.trending.path:
          reload = {
            time: trendingCoinsTime,
            reloadFn: reloadTrendingCoins,
          };
          break;

        case routes.exchanges.path:
          reload = {
            time: exchangesTime,
            reloadFn: reloadExchanges,
          };
          break;

        case routes.topCoins.path:
          reload = {
            time: topCoinsTime,
            reloadFn: reloadTopCoins,
          };
          break;

        case routes.watchlist.path:
          reload = {
            time: watchlistTime,
            reloadFn: reloadWatchlist,
          };
          break;

        default:
          reload = {
            time: Date.now(),
            reloadFn: null,
          };
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
    <div className={"flex items-center justify-center space-x-2 xl:space-x-4"}>
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
        <p className="hidden md:block text-sm xl:text-base font-normal text-card-foreground/70">
          {getRelativeDate(Date.now(), reloadData.time) + " ago"}
        </p>
      </button>

      <HeaderButton />
    </div>
  );
};

export default DataTimeAndReload;
