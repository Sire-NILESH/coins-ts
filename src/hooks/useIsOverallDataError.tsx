import { selectExchnagesIsError } from "../redux/exchangesSlice";
import { useAppSelector } from "../redux/store";
import { selectTopCoinsIsError } from "../redux/topCoinsSlice";
import { selectTrendingCoinsIsError } from "../redux/trendingCoinsSlice";

const useIsOverallDataError = () => {
  const topCoinsErr = useAppSelector(selectTopCoinsIsError);
  const exchangesErr = useAppSelector(selectExchnagesIsError);
  const trendingCoinsErr = useAppSelector(selectTrendingCoinsIsError);

  const overallDataError = topCoinsErr || trendingCoinsErr || exchangesErr;
  return { overallDataError, topCoinsErr, trendingCoinsErr, exchangesErr };
};

export default useIsOverallDataError;
