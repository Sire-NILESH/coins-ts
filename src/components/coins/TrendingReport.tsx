import React from "react";
import { TrendingCoin } from "../../../typing";
import routeConfig from "../../config/routeConfig";
import { useAppSelector } from "../../redux/store";
import {
  selectTrendingCoinsData,
  selectTrendingCoinsIsError,
} from "../../redux/trendingCoinsSlice";
import NoDataSkeleton from "../NoDataSkeleton";
import appIcons from "./../../config/appIcons";
import { selectTrendingCoinsIsLoading } from "./../../redux/trendingCoinsSlice";
import CoinImage from "./CoinImage";
import CoinReportWrapper from "./CoinReportWrapper";

const ReportRow: React.FC<{ coin: TrendingCoin }> = ({ coin }) => {
  return (
    // {/* ROW */}
    <div className="flex gap-2 items-center text-card-foreground/70">
      <CoinImage image={coin.small} name={coin.name} />
      <span className="text-xs font-normal py-1">{`${coin.name}`}</span>

      <div className="flex items-center ml-auto gap-4">
        <span className="text-xs font-bold px-2 py-1 inline rounded-full border border-border">
          Score: {coin.score}
        </span>

        <span className="text-xs font-bold px-2 py-1">
          {`${coin.price_btc.toFixed(12)}`}
          <span className="ml-2 text-xs font-normal">BTC</span>{" "}
        </span>
      </div>
    </div>
  );
};

const TrendingReport = () => {
  const trendingCoins = useAppSelector(selectTrendingCoinsData);
  const error = useAppSelector(selectTrendingCoinsIsError);
  const loading = useAppSelector(selectTrendingCoinsIsLoading);

  return (
    <CoinReportWrapper
      title="Trending"
      subtitle="(24h)"
      navigateTo={routeConfig.routeLinking.trending.path}
      icon={<appIcons.trending className="h-6 w-6 text-yellow-500" />}
    >
      {/* loading skeleton */}
      {loading
        ? Array.from({ length: 4 }).map((_, i) => {
            return (
              <div
                key={i}
                className="bg-secondary animate-pulse h-6 rounded-md"
              />
            );
          })
        : null}

      {!loading &&
        trendingCoins?.coins
          ?.slice(0, 4)
          .map((coin) => <ReportRow key={coin.item.id} coin={coin.item} />)}

      {!trendingCoins && error && !loading ? (
        <NoDataSkeleton isLoading={loading} className="min-h-[176px]" />
      ) : null}
    </CoinReportWrapper>
  );
};

export default TrendingReport;
