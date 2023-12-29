import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import {
  fetchWatchlistCoinsInfo,
  selectDBWatchlistCoins,
  selectWatchlistCoinsData,
  selectWatchlistCoinsIsLoading,
  selectshouldFetchWatchlistCoins,
} from "../redux/watchlistSlice";

const useWatchlistData = () => {
  const dbWatchlistedCoins = useAppSelector(selectDBWatchlistCoins);
  const watchlistedCoinsData = useAppSelector(selectWatchlistCoinsData);
  const watchlistIsLoading = useAppSelector(selectWatchlistCoinsIsLoading);
  const shouldFetchWatchlistCoins = useAppSelector(
    selectshouldFetchWatchlistCoins
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (shouldFetchWatchlistCoins)
      dispatch(fetchWatchlistCoinsInfo(dbWatchlistedCoins));
  }, [shouldFetchWatchlistCoins, dbWatchlistedCoins, dispatch]);

  return {
    dbWatchlistedCoins,
    watchlistedCoinsData,
    watchlistIsLoading,
    shouldFetchWatchlistCoins,
  };
};

export default useWatchlistData;
