import React from "react";
import { BiMedal } from "react-icons/bi";
import { BsCurrencyExchange } from "react-icons/bs";
import { MdTrendingUp } from "react-icons/md";
import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";
import { Link } from "react-router-dom";
import { Coin, Exchange, TrendingCoin } from "../../../typing";
import { useAppSelector } from "../../redux/store";
import { formatCurrency } from "../../uitls/helper";
import Button from "../ui/Button";
import TableRowData from "../ui/TableRowData";
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
    Trending: "/tables/trending",
    Winners: "/tables/top-coins",
    Exchanges: "/tables/exchanges",
  };

  const {
    // isLoading: istopCoinsLoading,
    data: topCoins,
    // isError: isErrorTopCoins,
  } = useAppSelector((state) => state.topCoins);

  const {
    // isLoading: istrendingCoinsLoading,
    data: allTrendingCoins,
    // isError: isErrorTrending,
  } = useAppSelector((state) => state.allTrendingCoins);

  const {
    // isLoading: isexchangesLoading,
    data: allExchanges,
    // isError: isErrorExchanges,
  } = useAppSelector((state) => state.allExchanges);

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div className="space-x-2 flex py-1 items-center">
          {props.title === "Winners" ? (
            <BiMedal className="h-6 w-6 inline text-yellow-500 " />
          ) : props.title === "Exchanges" ? (
            <BsCurrencyExchange className="h-6 w-6 inline text-yellow-500 " />
          ) : (
            <MdTrendingUp className="h-6 w-6 inline text-yellow-500 " />
          )}
          <p className="text-lg inline font-semibold text-secondary">
            {props.title}
            <span className="text-xs ml-4 font-light text-tertiary/80">
              {props.subtitle}
            </span>
          </p>
        </div>

        <Link to={navTo[props.title]}>
          <Button className="h-10">{props.title}</Button>
        </Link>
      </header>
      {topCoins && allTrendingCoins && allExchanges && (
        <div className="space-y-6 md:px-8 w-full">
          {props.title === "Exchanges"
            ? allExchanges
                .slice(0, 10)
                .map((coin, index) => <ExchangesReportRow coin={coin} />)
            : props.title === "Winners"
            ? topCoins
                .slice(0, 4)
                .map((coin, index) => <CoinReportRow coin={coin} />)
            : allTrendingCoins.coins
                .slice(0, 4)
                .map((coin, index) => <TrendingReportRow coin={coin.item} />)}
        </div>
      )}
    </div>
  );
};

export default CoinsReport;
