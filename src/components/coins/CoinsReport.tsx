import React from "react";
import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";
import { Link } from "react-router-dom";
import { Coin, Exchange, TrendingCoin } from "../../../typing";
import routeConfig from "../../config/routeConfig";
import { selectExchnagesData } from "../../redux/exchangesSlice";
import { useAppSelector } from "../../redux/store";
import { selectTopCoinsData } from "../../redux/topCoinsSlice";
import { selectTrendingCoinsData } from "../../redux/trendingCoinsSlice";
import { formatCurrency } from "../../uitls/helper";
import Button from "../ui/Button";
import TableRowData from "../ui/TableRowData";
import appIcons from "./../../config/appIcons";
import CoinImage from "./CoinImage";

const CoinReportRow: React.FC<{ coin: Coin }> = ({ coin }) => {
  return (
    // {/* ROW */}
    <div className="flex gap-2 items-center">
      <span className="text-xs font-bold text-tertiary px-2 py-1 inline rounded-full border border-primary dark:border-gray-700">
        {coin.market_cap_rank}
      </span>
      <CoinImage image={coin.image} name={coin.name} />

      <TableRowData title={coin.name} value={coin.current_price} />
      <div className="flex items-center ml-6">
        {+coin.market_cap_change_percentage_24h.toFixed(3) >= 0 ? (
          <RxTriangleUp className="text-green-600" />
        ) : (
          <RxTriangleDown className="text-red-600" />
        )}

        <span className="text-xs font-bold text-tertiary px-2 py-1">{`${formatCurrency(
          coin.market_cap_change_percentage_24h,
          3
        )}%`}</span>
      </div>
    </div>
  );
};

const ExchangesReportRow: React.FC<{ coin: Exchange }> = ({ coin }) => {
  return (
    // {/* ROW */}
    <div className="flex gap-2 items-center">
      <span className="text-xs font-bold text-tertiary px-2 py-1 inline rounded-full border border-primary dark:border-gray-700">
        {coin.trust_score_rank}
      </span>
      <CoinImage image={coin.image} name={coin.name} />
      <span className="text-xs font-normal text-tertiary px-2 py-1">{`${coin.name}`}</span>
      <div className="flex items-center ml-auto">
        <span className="text-xs font-bold text-tertiary px-2 py-1">
          {`${formatCurrency(coin.trade_volume_24h_btc, 3)}`}
          <span className="ml-2 text-xs font-normal text-tertiary">
            BTC
          </span>{" "}
        </span>
      </div>
    </div>
  );
};

const TrendingReportRow: React.FC<{ coin: TrendingCoin }> = ({ coin }) => {
  return (
    // {/* ROW */}
    <div className="flex gap-2 items-center">
      <CoinImage image={coin.small} name={coin.name} />
      <span className="text-xs font-normal text-tertiary py-1">{`${coin.name}`}</span>

      <div className="flex items-center ml-auto gap-4">
        <span className="text-xs font-bold text-tertiary px-2 py-1 inline rounded-full border border-primary dark:border-gray-700">
          Score: {coin.score}
        </span>

        <span className="text-xs font-bold text-tertiary px-2 py-1">
          {`${coin.price_btc.toFixed(12)}`}
          {/* {`${coin.price_btc.toExponential(4)}`} */}
          <span className="ml-2 text-xs font-normal text-tertiary">
            BTC
          </span>{" "}
        </span>
      </div>
    </div>
  );
};

const CoinsReport = (props: {
  title: "Trending" | "Winners" | "Exchanges";
  subtitle?: string;
}): JSX.Element => {
  const navTo = {
    Trending: routeConfig.routeLinking.trending.path,
    Winners: routeConfig.routeLinking.topCoins.path,
    Exchanges: routeConfig.routeLinking.exchanges.path,
  };

  const topCoins = useAppSelector(selectTopCoinsData);
  const trendingCoins = useAppSelector(selectTrendingCoinsData);
  const allExchanges = useAppSelector(selectExchnagesData);

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div className="space-x-2 flex py-1 items-center">
          {props.title === "Winners" ? (
            <appIcons.topCoins className="h-6 w-6 text-yellow-500" />
          ) : props.title === "Exchanges" ? (
            <appIcons.exchanges className="h-6 w-6 text-yellow-500" />
          ) : (
            <appIcons.trending className="h-6 w-6 text-yellow-500" />
          )}
          <p className="text-lg inline font-semibold text-secondary">
            {props.title}
            <span className="text-xs ml-4 font-light text-tertiary/80">
              {props.subtitle}
            </span>
          </p>
        </div>

        <Link to={navTo[props.title]}>
          <Button className="h-10 min-w-[6rem]">{props.title}</Button>
        </Link>
      </header>

      <div className="space-y-6 md:px-8 w-full">
        {props.title === "Exchanges" && allExchanges
          ? allExchanges
              .slice(0, 10)
              .map((coin) => <ExchangesReportRow key={coin.id} coin={coin} />)
          : props.title === "Winners" && topCoins
          ? topCoins
              .slice(0, 4)
              .map((coin) => <CoinReportRow key={coin.id} coin={coin} />)
          : props.title === "Trending" && trendingCoins
          ? trendingCoins.coins
              .slice(0, 4)
              .map((coin) => (
                <TrendingReportRow key={coin.item.id} coin={coin.item} />
              ))
          : null}
      </div>
    </div>
  );
};

export default CoinsReport;
