import { useAppDispatch, useAppSelector } from "../redux/store";
import {
  fetchWatchlistCoinsInfo,
  selectDBWatchlistCoins,
} from "../redux/watchlistSlice";

const useReloadWatchlist = () => {
  const dbWatchlistedCoins = useAppSelector(selectDBWatchlistCoins);
  const dispatch = useAppDispatch();

  function reloadState() {
    dispatch(fetchWatchlistCoinsInfo(dbWatchlistedCoins));
  }
  return reloadState;
};

export default useReloadWatchlist;
