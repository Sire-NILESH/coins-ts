import { useAppDispatch } from "../redux/store";
import { fetchTrending } from "../redux/trendingCoinsSlice";

const useReloadTrendingCoins = () => {
  const dispatch = useAppDispatch();

  function reloadState() {
    dispatch(fetchTrending());
  }
  return reloadState;
};

export default useReloadTrendingCoins;
