import React from "react";
import { BiMedal } from "react-icons/bi";
import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";
import TableRowData from "../ui/TableRowData";
import HeaderButton from "../ui/HeaderButton";
import { Coin, Exchange, TrendingCoin } from "../../../typing";
import { allCoins } from "../../data/all-coins/all-coin-markets";
import CoinImage from "./CoinImage";
import { exchangesData } from "../../data/exchanges/exchangesData";
import { formatCurrency } from "../../uitls/helper";
import { trending } from "./../../data/trending/trendingCoins";
import { Link } from "react-router-dom";
import PrimaryButton from "../ui/PrimaryButton";

const CoinReportRow: React.FC<{ coin: Coin }> = ({ coin }) => {
  return (
    // {/* ROW */}
    <div className="flex gap-2 items-center">
      <span className="text-xs font-bold text-slate-500 px-2 py-1 inline rounded-full border">
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

        <span className="text-xs font-bold text-slate-500 px-2 py-1">{`${formatCurrency(
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
      <span className="text-xs font-bold text-slate-500 px-2 py-1 inline rounded-full border">
        {coin.trust_score_rank}
      </span>
      <CoinImage image={coin.image} name={coin.name} />
      <span className="text-xs font-normal text-slate-500 px-2 py-1">{`${coin.name}`}</span>
      <div className="flex items-center ml-auto">
        <span className="text-xs font-bold text-slate-500 px-2 py-1">
          {`${formatCurrency(coin.trade_volume_24h_btc, 3)}`}
          <span className="ml-2 text-xs font-normal text-slate-500">
            BTC
          </span>{" "}
        </span>

        {/* <span className="text-xs font-bold text-slate-500 px-2 py-1">{`${+coin.trade_volume_24h_btc_normalized.toFixed(
          3
        )} btc`}</span> */}
      </div>
    </div>
  );
};
const TrendingReportRow: React.FC<{ coin: TrendingCoin }> = ({ coin }) => {
  return (
    // {/* ROW */}
    <div className="flex gap-2 items-center">
      <CoinImage image={coin.small} name={coin.name} />
      <span className="text-xs font-normal text-slate-500 px-2 py-1">{`${coin.name}`}</span>

      <div className="flex items-center ml-auto gap-4">
        <span className="text-xs font-bold text-slate-500 px-2 py-1 inline rounded-full border">
          Score: {coin.score}
        </span>

        <span className="text-xs font-bold text-slate-500 px-2 py-1">
          {`${coin.price_btc.toFixed(12)}`}
          <span className="ml-2 text-xs font-normal text-slate-500">
            BTC
          </span>{" "}
        </span>
      </div>
    </div>
  );
};

// space-y-4 p-6 shadow-2xl border-t-2 border-white rounded-3xl shadow-blue-100
const CoinsReport = (props: {
  title: "Trending" | "Winners" | "Exchanges";
  subtitle?: string;
}): JSX.Element => {
  const navTo = {
    Trending: "/all_coins/trending",
    Winners: "/all_coins/top_coins",
    Exchanges: "/all_coins/exchanges",
  };

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div className="space-x-2 flex py-1 items-center">
          <BiMedal className="h-6 w-6 inline text-yellow-500 " />
          <p className="text-lg inline font-semibold text-slate-600">
            {props.title}
            <span className="text-xs ml-4 font-light text-slate-500/80">
              {props.subtitle}
            </span>
          </p>
        </div>

        <PrimaryButton
          className="flex-shrink-0"
          title="View all"
          to={navTo[props.title]}
        />
      </header>
      <div className="space-y-6 px-8 w-full">
        {props.title === "Exchanges"
          ? exchangesData
              .slice(0, 10)
              .map((coin, index) => <ExchangesReportRow coin={coin} />)
          : props.title === "Winners"
          ? allCoins
              .slice(0, 4)
              .map((coin, index) => <CoinReportRow coin={coin} />)
          : trending.coins
              .slice(0, 4)
              .map((coin, index) => <TrendingReportRow coin={coin.item} />)}
      </div>
    </div>
  );
};

export default CoinsReport;
