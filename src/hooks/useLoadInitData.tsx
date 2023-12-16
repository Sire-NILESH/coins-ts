import { useEffect } from "react";
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

    const res = await Promise.allSettled([
      fetchtopCoinsRes,
      fetchExchangesRes,
      fetchTrendingRes,
    ]);

    console.log([res[0].status, res[1].status, res[2].status]);

    dispatch(setDataFetchTime(Date.now()));
    dispatch(setInitDataStatus("success"));
  }

  useEffect(() => {
    if (initDataStatus === "false") {
      init();
    }
    // eslint-disable-next-line
  }, [initDataStatus]);
};

export default useLoadInitData;
