import { setDataFetchTime } from "../redux/dataFetchTimeSlice";
import { fetchExchanges } from "../redux/exchangesSlice";
import {
  selectInitDataStatusSlice,
  setInitDataStatus,
} from "../redux/initDataStatusSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { fetchTopCoins } from "../redux/topCoinsSlice";
import { fetchTrending } from "../redux/trendingCoinsSlice";

const useLoadInitData = () => {
  const dispatch = useAppDispatch();

  const { initDataStatus } = useAppSelector(selectInitDataStatusSlice);

  async function init() {
    dispatch(setInitDataStatus("loading"));
    const fetchtopCoinsRes = dispatch(fetchTopCoins());
    const fetchExchangesRes = dispatch(fetchExchanges());
    const fetchTrendingRes = dispatch(fetchTrending());

    await Promise.allSettled([
      fetchtopCoinsRes,
      fetchExchangesRes,
      fetchTrendingRes,
    ]);

    dispatch(setDataFetchTime(Date.now()));
    dispatch(setInitDataStatus("checked"));
  }

  if (initDataStatus === "unchecked") {
    init();
  }
};

export default useLoadInitData;
