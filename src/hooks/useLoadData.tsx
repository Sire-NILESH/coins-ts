import { useEffect } from "react";
import { useAppDispatch } from "../redux/store";
import { fetchTopCoins } from "../redux/topCoinsSlice";
import { fetchExchanges } from "../redux/exchangesSlice";
import { fetchTrending } from "../redux/trendingCoinsSlice";
import { setDataFetchTime } from "../redux/dataFetchTimeSlice";

const useLoadData = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTopCoins());
    dispatch(fetchExchanges());
    dispatch(fetchTrending());
    dispatch(setDataFetchTime(Date.now()));
  }, [dispatch]);
};

export default useLoadData;
