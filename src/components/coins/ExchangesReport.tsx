import React from "react";
import CoinReportWrapper from "./CoinReportWrapper";
import routeConfig from "../../config/routeConfig";
import appIcons from "./../../config/appIcons";
import { Exchange } from "../../../typing";
import CoinImage from "./CoinImage";
import { formatCurrency } from "../../uitls/helper";
import { useAppSelector } from "../../redux/store";
import {
  selectExchnagesData,
  selectExchnagesIsError,
  selectExchnagesIsLoading,
} from "../../redux/exchangesSlice";
import NoDataSkeleton from "../NoDataSkeleton";

const ReportRow: React.FC<{ coin: Exchange }> = ({ coin }) => {
  return (
    <div className="flex gap-2 items-center text-card-foreground/70">
      <span className="text-xs font-bold px-2 py-1 inline rounded-full border dark:border-gray-700">
        {coin.trust_score_rank}
      </span>
      <CoinImage image={coin.image} name={coin.name} />
      <span className="text-xs font-normal px-2 py-1">{`${coin.name}`}</span>
      <div className="flex items-center ml-auto">
        <span className="text-xs font-bold px-2 py-1">
          {`${formatCurrency(coin.trade_volume_24h_btc, 3)}`}
          <span className="ml-2 text-xs font-normal">BTC</span>{" "}
        </span>
      </div>
    </div>
  );
};

const ExchangesReport = () => {
  const allExchanges = useAppSelector(selectExchnagesData);
  const error = useAppSelector(selectExchnagesIsError);
  const loading = useAppSelector(selectExchnagesIsLoading);

  return (
    <CoinReportWrapper
      title="Exchanges"
      subtitle="(24h)"
      navigateTo={routeConfig.routeLinking.exchanges.path}
      icon={<appIcons.exchanges className="h-6 w-6 text-yellow-500" />}
    >
      {/* loading skeleton */}
      {loading
        ? Array.from({ length: 10 }).map((_, i) => {
            return (
              <div
                key={i}
                className="bg-secondary animate-pulse h-6 rounded-md"
              />
            );
          })
        : null}

      {!loading &&
        allExchanges
          ?.slice(0, 10)
          .map((coin) => <ReportRow key={coin.id} coin={coin} />)}

      {!allExchanges && error && !loading ? (
        <NoDataSkeleton className="min-h-[476px]" />
      ) : null}
    </CoinReportWrapper>
  );
};

export default ExchangesReport;
