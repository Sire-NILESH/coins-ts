import React from "react";
import CoinCardRow from "./CoinCardRow";
import { CoinInfo } from "../../../typing";

type Props = {
  coin: CoinInfo;
};

const CoinTodayAndAllTimePerformance = ({ coin }: Props) => {
  return (
    <div className="bg-secondary sm:p-8 p-2 rounded-3xl">
      {/* ATH AND ATL ROW */}
      <div className="flex flex-wrap gap-5 justify-between">
        {/* HIGH/LOW TODAY */}
        <div className="w-[20rem] flex-1 rounded-3xl bg-primary p-6">
          <header className="mb-3 font-bold text-secondary py-1">
            <p className="uppercase text-sm tracking-widest text-blue-500">
              Today{" "}
            </p>
          </header>
          <div className="space-y-1">
            <CoinCardRow
              title="Current"
              value={coin.market_data.current_price["usd"]}
              prepend="$"
            />
            <CoinCardRow
              title="High"
              value={coin.market_data.high_24h["usd"]}
              prepend="$"
            />
            <CoinCardRow
              title="Low"
              value={coin.market_data.low_24h["usd"]}
              prepend="$"
            />
          </div>
        </div>

        {/* ATH CARD */}
        <div className="min-w-[20rem] flex-1 rounded-3xl bg-primary p-6">
          <header className="mb-2 font-bold text-secondary py-1">
            <p className="text-sm tracking-widest text-blue-500">
              ATH{" "}
              {/* <RxTriangleUp className="inline w-6 h-6 text-green-600" /> ATH{" "} */}
            </p>
            <span className="[word-spacing:1px] font-normal text-sm text-tertiary">
              <span className=" font-normal">All time high was on </span>{" "}
              <span className="font-semibold">{`${new Date(
                coin.market_data.ath_date["usd"]
              ).toUTCString()}`}</span>
            </span>
          </header>
          <p className="mb-1 text-xs [word-spacing:1.2px] text-secondary">
            ATH stands at{" "}
            <span className="text-green-600 font-semibold">
              ${Number(coin.market_data.ath["usd"].toFixed(4)).toLocaleString()}
            </span>
          </p>

          <p className="text-xs [word-spacing:1.2px] text-secondary">
            {coin.market_data.ath_change_percentage["usd"] < 0
              ? "Since then, down by "
              : "Since then, up by"}{" "}
            <span
              className={`${
                coin.market_data.ath_change_percentage["usd"] < 0
                  ? "text-red-600"
                  : "text-green-400"
              }  font-semibold`}
            >
              {Number(
                coin.market_data.ath_change_percentage["usd"].toFixed(2)
              ).toLocaleString()}
              %
            </span>
          </p>
        </div>

        {/* ATL CARD */}
        <div className="min-w-[20rem] flex-1 rounded-3xl bg-primary p-6">
          <header className="mb-2 font-bold text-secondary py-1">
            <p className="text-sm tracking-widest text-blue-500">
              {" "}
              ATL{" "}
              {/* <RxTriangleDown className="inline w-6 h-6 text-red-600" /> ATL{" "} */}
            </p>
            <span className="[word-spacing:1px] font-normal text-sm text-tertiary">
              <span className=" font-normal">All time low was on </span>{" "}
              <span className="font-semibold">{`${new Date(
                coin.market_data.atl_date["usd"]
              ).toUTCString()}`}</span>
            </span>
          </header>
          <p className="mb-1 text-xs [word-spacing:1.2px] text-secondary">
            ATL stood at{" "}
            <span className="text-green-600 font-semibold">
              ${Number(coin.market_data.atl["usd"].toFixed(4)).toLocaleString()}
            </span>
          </p>

          <p className="text-xs [word-spacing:1.2px] text-secondary">
            {coin.market_data.atl_change_percentage["usd"] < 0
              ? "Since then, down by "
              : "Since then, up by "}{" "}
            <span
              className={`${
                coin.market_data.atl_change_percentage["usd"] < 0
                  ? "text-red-600"
                  : "text-green-600"
              }  font-semibold`}
            >
              {Number(
                coin.market_data.atl_change_percentage["usd"].toFixed(2)
              ).toLocaleString()}
              %
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoinTodayAndAllTimePerformance;
