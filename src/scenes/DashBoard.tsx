import React, { useEffect } from "react";
import CoinInfoCard from "../components/coins/CoinInfoCard";
import { CoinState } from "../uitls/contexts/CoinContext";
import { allCoins } from "../data/all-coins/all-coin-markets";
import CoinsReport from "../components/coins/CoinsReport";

import Header from "../components/ui/Header";

import LoadingSpinner from "../components/ui/LoadingSpinner";
import { useAppSelector } from "../redux/store";

const DashBoard = () => {
  const {
    isLoading: istopCoinsLoading,
    data: topCoins,
    isError: isErrorTopCoins,
  } = useAppSelector((state) => state.topCoins);

  const {
    isLoading: istrendingCoinsLoading,
    // data: allTrendingCoins,
    // isError: isErrorTrending,
  } = useAppSelector((state) => state.allTrendingCoins);

  const {
    isLoading: isexchangesLoading,
    // data: allExchanges,
    // isError: isErrorExchanges,
  } = useAppSelector((state) => state.allExchanges);

  if (
    (istopCoinsLoading || istrendingCoinsLoading || isexchangesLoading) &&
    !isErrorTopCoins
  ) {
    return (
      <div className="h-full w-full overflow-hidden flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  console.log(topCoins);

  return (
    <div className="h-full w-full overflow-hidden">
      <Header title="Top Currencies" />

      {topCoins && (
        <div className="flex justify-between items-center h-full">
          <div className="w-full h-full flex flex-col items-center overflow-y-auto pb-20 space-y-20">
            <div className="p-2 grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 md:gap-8 lg:gap-20">
              <CoinInfoCard graphColor={"blue"} data={topCoins[0]} />
              <CoinInfoCard graphColor={"green"} data={topCoins[1]} />
              <CoinInfoCard graphColor={"red"} data={topCoins[2]} />
            </div>

            {/* coins reports */}
            <div className="w-full grid md:grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-14 2xl:gap-x-32 lg:px-4">
              <div className="lg:col-span-1 w-full max-w-xl mx-auto">
                <CoinsReport title="Winners" subtitle="Mkt cap (24h)" />
              </div>
              <div className="lg:col-span-1 w-full lg:row-span-2 max-w-xl mx-auto">
                <CoinsReport title="Exchanges" subtitle="(24h)" />
              </div>
              <div className="lg:col-span-1 w-full max-w-xl mx-auto">
                <CoinsReport title="Trending" subtitle="(24h)" />
              </div>
              {/* <CoinsReport title="Losers" /> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
