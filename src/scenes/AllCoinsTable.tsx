import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import { allCoins } from "../data/all-coins/all-coin-markets";
import { RiNumbersFill } from "react-icons/ri";
import { Coin } from "../../typing";

const CoinItem: React.FC<{ coin: Coin }> = ({ coin }) => {
  return (
    <>
      {/* STAR */}
      <div className="">
        <span>
          <AiOutlineStar className="h-4 w-4 text-slate-500" />
        </span>
      </div>
      {/* RANK */}
      <div className="mr-auto">
        <span className="border text-sm bg-slate-100 text-slate-600 border-slate-300 flex items-center justify-center rounded-full h-6 w-6 my-auto">
          {coin.market_cap_rank}
        </span>
      </div>
      {/* COIN */}
      <div className="place-self-start">
        <Link to={`/coin/${coin.id}`} className="">
          <div className="flex items-center gap-2">
            <img className="w-5 rounded-full" src={coin.image} alt={coin.id} />
            <span className="font-semibold text-base text-slate-600 text-left">
              {coin.symbol.toUpperCase()}
            </span>
          </div>
          <p className="hidden sm:block text-left text-xs text-slate-600 ml-6">
            {coin.name}
          </p>
        </Link>
      </div>
      {/* PRICE */}
      <div className="col-span-2 text-sm text-slate-600">
        ${coin.current_price.toLocaleString()}
      </div>
      {/* CHART */}
      {/* <Sparklines data={coin.sparkline_in_7d.price}>
        <SparklinesLine color="#166534" />
      </Sparklines> */}
      <div className="col-span-2 w-full h-full">
        <Sparklines data={coin.sparkline_in_7d.price} margin={6}>
          <SparklinesLine
            style={{
              strokeWidth: 1,
              stroke: "#336aff",
              fill: "none",
            }}
          />
          <SparklinesSpots
            size={1}
            style={{
              stroke: "#336aff",
              strokeWidth: 2,
              fill: "white",
            }}
          />
        </Sparklines>
      </div>
      {/* 24H */}
      <div>
        {coin.price_change_percentage_24h > 0 ? (
          <p className="text-green-600 text-sm font-semibold">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className="text-red-500 text-sm font-semibold">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        )}
      </div>
      {/* 24H VOL */}
      <div className="col-span-2 w-[180px] text-sm text-slate-600 hidden md:table-cell">
        ${coin.total_volume.toLocaleString()}
      </div>
      {/* MKT */}
      <div className="col-span-2 w-[180px] text-sm text-slate-600 hidden sm:block">
        ${coin.market_cap.toLocaleString()}
      </div>
    </>
  );
};

const AllCoinsTable = () => {
  const [searchText, setSearchText] = useState("");
  // console.log(allCoins)
  return (
    <div>
      <header className="flex flex-col md:flex-row justify-between pb-5 text-center md:text-right ">
        <h1 className="text-2xl font-semibold mb-2 uppercase tracking-widest text-slate-500">
          All &nbsp;Cryptocurrencies
        </h1>
        <form>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full bg-primary border border-input px-4 py-2 rounded-full focus:outline-none focus:ring-blue-600"
            type="text"
            placeholder="Search a coin"
          />
        </form>
      </header>

      <div className="w-full border-collapse text-center rounded-3xl space-y-6">
        <header className="px-4 grid grid-cols-12 place-items-center rounded-xl bg-blue-100/80 py-4">
          {/* <div className="">⭐</div> */}
          <div className="px-4">⭐</div>
          <div className="px-4 text-slate-600 mr-auto">
            <RiNumbersFill />
          </div>
          <div className="place-self-start my-auto font-semibold text-slate-600">
            🪙&nbsp;Coin
          </div>
          <div className="col-span-2 font-semibold text-slate-600">
            🏷️&nbsp;Price
          </div>
          <div className="col-span-2 font-semibold text-slate-600">
            📅&nbsp;7 Days
          </div>
          <div className="font-semibold text-slate-600">🕒&nbsp;24h</div>
          <div className="col-span-2 hidden md:block font-semibold text-slate-600">
            24h Volume
          </div>
          <div className="col-span-2 hidden sm:block font-semibold text-slate-600">
            Market cap
          </div>
        </header>
        <div className="grid grid-cols-12 place-items-center px-4 gap-y-10 ">
          {allCoins
            .filter((value) => {
              if (searchText === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return value;
              }
            })
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllCoinsTable;
