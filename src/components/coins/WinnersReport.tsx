import { Coin } from "../../../typing";
import routeConfig from "../../config/routeConfig";
import { useAppSelector } from "../../redux/store";
import {
  selectTopCoinsData,
  selectTopCoinsIsError,
  selectTopCoinsIsLoading,
} from "../../redux/topCoinsSlice";
import { formatCurrency } from "../../uitls/helper";
import NoDataSkeleton from "../NoDataSkeleton";
import TableRowData from "../ui/TableRowData";
import appIcons from "./../../config/appIcons";
import CoinImage from "./CoinImage";
import CoinReportWrapper from "./CoinReportWrapper";

const ReportRow = ({ coin }: { coin: Coin }) => {
  return (
    <div className="flex gap-2 items-center text-card-foreground/70">
      <span className="text-xs font-bold px-2 py-1 inline rounded-full border">
        {coin.market_cap_rank}
      </span>
      <CoinImage image={coin.image} name={coin.name} />

      <TableRowData title={coin.name} value={coin.current_price} />
      <div className="flex items-center ml-6">
        {+coin.market_cap_change_percentage_24h.toFixed(3) >= 0
          ? appIcons.triangleUp
          : appIcons.triangleDown}

        <span className="text-xs font-bold px-2 py-1">{`${formatCurrency(
          coin.market_cap_change_percentage_24h,
          3
        )}%`}</span>
      </div>
    </div>
  );
};

const WinnersReport = () => {
  const topCoins = useAppSelector(selectTopCoinsData);
  const error = useAppSelector(selectTopCoinsIsError);
  const loading = useAppSelector(selectTopCoinsIsLoading);

  return (
    <CoinReportWrapper
      title="Winners"
      subtitle="Mkt cap (24h)"
      navigateTo={routeConfig.routeLinking.topCoins.path}
      icon={<appIcons.topCoins className="h-6 w-6 text-yellow-500" />}
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
        topCoins
          ?.slice(0, 4)
          .map((coin) => <ReportRow key={coin.id} coin={coin} />)}

      {!topCoins && error && !loading ? (
        <NoDataSkeleton isLoading={loading} className="min-h-[176px]" />
      ) : null}
    </CoinReportWrapper>
  );
};

export default WinnersReport;
