import { useAppDispatch } from "../redux/store";
import { fetchTopCoins } from "../redux/topCoinsSlice";
import { fetchExchanges } from "../redux/exchangesSlice";
import { fetchTrending } from "../redux/trendingCoinsSlice";
import { setDataFetchTime } from "../redux/dataFetchTimeSlice";

const useReloadData = () => {
  const dispatch = useAppDispatch();

  function reloadState() {
    dispatch(fetchTopCoins());
    dispatch(fetchExchanges());
    dispatch(fetchTrending());
    dispatch(setDataFetchTime(Date.now()));
  }
  return reloadState;
};

export default useReloadData;
