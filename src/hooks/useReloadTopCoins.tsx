import { useAppDispatch } from "../redux/store";
import { fetchTopCoins } from "../redux/topCoinsSlice";

const useReloadTopCoins = () => {
  const dispatch = useAppDispatch();

  function reloadState() {
    dispatch(fetchTopCoins());
  }
  return reloadState;
};

export default useReloadTopCoins;
