import CoinInfoCard from "../components/coins/CoinInfoCard";
import CoinsReport from "../components/coins/CoinsReport";

import Header from "../components/ui/Header";

import LoadingSpinner from "../components/ui/LoadingSpinner";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/store";
import routeConfig from "../config/routeConfig";

const Overview = () => {
  const navigate = useNavigate();

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

  // console.log(topCoins);
  // console.log("dashboard");

  return (
    <div className="">
      <div className="pb-1 overflow-hidden">
        <Header title="Watchlist Coins" time="state" />
      </div>

      {topCoins && (
        <div className="mt-5 flex justify-between items-center">
          <div className="w-full h-full flex flex-col items-center pb-10 xl:pb-0 space-y-20">
            <div className="p-2 grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-20">
              <CoinInfoCard
                graphColor={"blue"}
                data={topCoins[0]}
                navigationHandler={() => {
                  navigate(
                    routeConfig.routeLinking.coin.path + `/${topCoins[0].id}`
                  );
                }}
              />
              <CoinInfoCard
                graphColor={"green"}
                data={topCoins[1]}
                navigationHandler={() => {
                  navigate(
                    routeConfig.routeLinking.coin.path + `/${topCoins[1].id}`
                  );
                }}
              />
              <CoinInfoCard
                graphColor={"red"}
                data={topCoins[2]}
                navigationHandler={() => {
                  navigate(
                    routeConfig.routeLinking.coin.path + `/${topCoins[2].id}`
                  );
                }}
              />

              <div className="xl:hidden">
                <CoinInfoCard
                  graphColor={"blue"}
                  data={topCoins[3]}
                  navigationHandler={() => {
                    navigate(
                      routeConfig.routeLinking.coin.path + `/${topCoins[3].id}`
                    );
                  }}
                />
              </div>
            </div>

            {/* coins reports */}
            <div className="w-full grid md:grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-14 2xl:gap-x-32 sm:px-4 md:px-0 lg:px-4">
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

            {/* spacer */}
            <div className="xl:hidden h-1" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Overview;
