import routeConfig from "../config/routeConfig";
import useReloadTopCoins from "../hooks/useReloadTopCoins";
import { useAppSelector } from "../redux/store";
import {
  selectTopCoinsData,
  selectTopCoinsIsError,
  selectTopCoinsIsLoading,
} from "../redux/topCoinsSlice";
import NoDataSkeleton from "./NoDataSkeleton";
import CoinInfoCard from "./coins/CoinInfoCard";
import SkeletonCoinInfoCard from "./SkeletonCoinInfoCard";

const TopCoinsInfoAtGlance = () => {
  const topCoins = useAppSelector(selectTopCoinsData);
  const loading = useAppSelector(selectTopCoinsIsLoading);
  const error = useAppSelector(selectTopCoinsIsError);

  const reloadTopCoins = useReloadTopCoins();

  if (error && !topCoins && !loading) {
    return (
      <NoDataSkeleton
        isLoading={loading}
        className="min-h-[551px]"
        reloadHandler={reloadTopCoins}
      />
    );
  }

  return (
    <>
      <div className="rounded-3xl w-full p-4 grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-20">
        {loading ? (
          <>
            {/* loading skeleton */}
            {Array.from({ length: 3 }).map((_row, i) => {
              return <SkeletonCoinInfoCard key={i} />;
            })}

            <div key={3} className="block xl:hidden place-self-center">
              <SkeletonCoinInfoCard />
            </div>
          </>
        ) : null}

        {topCoins && topCoins.length > 0 && !loading && (
          <>
            {Array.from({ length: 3 }).map((_, i) => (
              <CoinInfoCard
                key={i}
                graphColor={"blue"}
                data={topCoins[i]}
                onClickNavigateTo={
                  routeConfig.routeLinking.coin.path + `/${topCoins[i].id}`
                }
              />
            ))}

            <div key={3} className="place-self-center xl:hidden">
              <CoinInfoCard
                graphColor={"blue"}
                data={topCoins[3]}
                onClickNavigateTo={
                  routeConfig.routeLinking.coin.path + `/${topCoins[3].id}`
                }
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TopCoinsInfoAtGlance;
