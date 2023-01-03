import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import HeaderButton from "./../components/ui/HeaderButton";
import ChartMd from "../components/graph/ChartMd";

// ONE YEAR AGO TIMESTAMP
// new Date().setFullYear(new Date().getFullYear() - 1)
// ONE YEAR AGO DATE
// new Date(new Date().setFullYear(new Date().getFullYear() - 1))

// console.log({"from":Math.round(new Date().setFullYear(new Date().getFullYear() - 1)/1000), "to": Math.round(Date.now()/1000)});

// `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;
// https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1392577232&to=1422577232

const Coin = () => {
  return (
    <div>
      <header className="flex items-center justify-between mb-5">
        <h1 className="font-semibold uppercase tracking-[6px] text-slate-500 text-2xl">
          Coin page
        </h1>
        <div className="">
          <ul className="flex items-center gap-8 uppercase text-xs font-semibold text-slate-400">
            <li className="font-bold text-slate-600">D</li>
            <li className="cursor-pointer">W</li>
            <li className="cursor-pointer">M</li>
            <li className="cursor-pointer">Y</li>
            <li className="cursor-pointer">ALL</li>
            <li>
              <CiCalendarDate className="h-5 w-5 text-slate-600" />
            </li>
            <li>
              <HeaderButton title="View all" />
            </li>
          </ul>
        </div>
      </header>

      <main>
        <div className="h-[25rem]">
          <ChartMd color="green" type="year" />
        </div>
      </main>
    </div>
  );
};

export default Coin;
