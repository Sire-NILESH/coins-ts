import NoDataErr from "../components/NoDataErr";
import CoinInfoCard from "../components/coins/CoinInfoCard";
import CoinsReport from "../components/coins/CoinsReport";
import Header from "../components/ui/Header";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import routeConfig from "../config/routeConfig";
import useIsOverallDataError from "../hooks/useIsOverallDataError";
import useReloadData from "../hooks/useReloadData";
import { selectInitDataStatusSlice } from "../redux/initDataStatusSlice";
import { useAppSelector } from "../redux/store";
import { selectTopCoinsData } from "../redux/topCoinsSlice";

const Overview = () => {
  const { initDataStatus } = useAppSelector(selectInitDataStatusSlice);

  // checking the exisitance of any one of the initial data (topcoins, exchanges, trending) is fine as we are only interested in checking if the error is from initial data fetch (and show NoDataErr component) or from the reload data fetch (in that case show show old state ). Rest we can rely on the isOverallErr
  const topCoins = useAppSelector(selectTopCoinsData);

  const { overallDataError } = useIsOverallDataError();
  const reloadDataState = useReloadData();

  if (initDataStatus === "loading") {
    return (
      <div className="h-full w-full overflow-hidden flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="">
      <div className="pb-1 overflow-hidden">
        <Header title="Dashboard Overview" time="state" />
      </div>

      {overallDataError && !topCoins && (
        <NoDataErr reloadHandler={reloadDataState} />
      )}

      {topCoins && (
        <div className="mt-5 flex justify-between items-center">
          <div className="w-full h-full flex flex-col items-center pb-10 xl:pb-0 space-y-20">
            <div className="rounded-3xl w-full p-4 grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-20 ">
              <CoinInfoCard
                graphColor={"blue"}
                data={topCoins[0]}
                onClickNavigateTo={
                  routeConfig.routeLinking.coin.path + `/${topCoins[0].id}`
                }
              />
              <CoinInfoCard
                graphColor={"green"}
                data={topCoins[1]}
                onClickNavigateTo={
                  routeConfig.routeLinking.coin.path + `/${topCoins[1].id}`
                }
              />
              <CoinInfoCard
                graphColor={"red"}
                data={topCoins[2]}
                onClickNavigateTo={
                  routeConfig.routeLinking.coin.path + `/${topCoins[2].id}`
                }
              />

              <div className="place-self-center xl:hidden">
                <CoinInfoCard
                  graphColor={"blue"}
                  data={topCoins[3]}
                  onClickNavigateTo={
                    routeConfig.routeLinking.coin.path + `/${topCoins[3].id}`
                  }
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
