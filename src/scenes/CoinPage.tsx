import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CoinDescriptionAndSocials from "../components/coinInfoPage/CoinDescriptionAndSocials";
import CoinMetrics from "../components/coinInfoPage/CoinMetrics";
import CoinPriceChangesAndChart from "../components/coinInfoPage/CoinPriceChangesAndChart";
import CoinTodayAndAllTimePerformance from "../components/coinInfoPage/CoinTodayAndAllTimePerformance";
import Header from "../components/ui/Header";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import {
  fetchCoinInfo,
  selectCoinInfoData,
  selectCoinInfoIsError,
  selectCoinInfoIsLoading,
} from "../redux/coinInfoSlice";
import { useAppDispatch } from "../redux/store";
import { useAppSelector } from "./../redux/store";
import NoDataErr from "../components/NoDataErr";

const CoinPage = () => {
  const { coinId } = useParams();

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectCoinInfoIsLoading);
  const coin = useAppSelector(selectCoinInfoData);
  const isError = useAppSelector(selectCoinInfoIsError);

  function getCoinInfo(coinId: string) {
    dispatch(fetchCoinInfo(coinId));
  }

  useEffect(() => {
    if (coinId) {
      getCoinInfo(coinId);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading && !isError) {
    return (
      <div className="h-full w-full overflow-hidden flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  function reloadDataState() {
    if (coinId) {
      getCoinInfo(coinId);
    }
  }

  return (
    <div className="h-full w-full overflow-scroll">
      <Header title="Coin page" hasGoBackBtn={true} />

      {isError && !coin && <NoDataErr reloadHandler={reloadDataState} />}

      {coin && (
        <main className="w-full">
          <CoinDescriptionAndSocials coin={coin} />

          <CoinPriceChangesAndChart coin={coin} />

          <CoinTodayAndAllTimePerformance coin={coin} />

          <CoinMetrics coin={coin} />
        </main>
      )}

      {/* spacer */}
      <div className="xl:hidden h-28" />
    </div>
  );
};

export default CoinPage;
