import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import { allCoins } from "../data/all-coins/all-coin-markets";
import { RiNumbersFill } from "react-icons/ri";
import { Coin } from "../../typing";

// https://tailwindcomponents.com/component/table-ui-with-tailwindcss-and-alpinejs

const CoinItem: React.FC<{ coin: Coin }> = ({ coin }) => {
  return (
    <>
      {/* STAR */}
      <div className="">
        <span>
          <AiOutlineStar className="h-4 w-4 text-tertiary" />
        </span>
      </div>
      {/* RANK */}
      <div className="mr-auto">
        <span className="border border-primary text-sm bg-slate-100 text-secondary  flex items-center justify-center rounded-full h-6 w-6 my-auto">
          {coin.market_cap_rank}
        </span>
      </div>
      {/* COIN */}
      <div className="place-self-start">
        <Link to={`/coin/${coin.id}`} className="">
          <div className="flex items-center gap-2">
            <img className="w-5 rounded-full" src={coin.image} alt={coin.id} />
            <span className="font-semibold text-base text-secondary text-left">
              {coin.symbol.toUpperCase()}
            </span>
          </div>
          <p className="hidden sm:block text-left text-xs text-secondary ml-6">
            {coin.name}
          </p>
        </Link>
      </div>
      {/* PRICE */}
      <div className="col-span-2 text-sm text-secondary">
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
      <div className="col-span-2 w-[180px] text-sm text-secondary hidden md:table-cell">
        ${coin.total_volume.toLocaleString()}
      </div>
      {/* MKT */}
      <div className="col-span-2 w-[180px] text-sm text-secondary hidden sm:block">
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
      {/* <header className="flex flex-col md:flex-row justify-between pb-5 text-center md:text-right ">
        <h1 className="text-2xl font-semibold mb-2 uppercase tracking-widest text-tertiary">
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
      </header> */}

      <div className="max-w-full text-center rounded-3xl space-y-6 mx-auto bg-primary  border border-gray-200 p-4">
        <p className="px-5 py-4 border-b text-left border-primary">
          <h2 className="font-semibold text-lg text-secondary mb-1">
            Top 10 Cryptocurrencies
          </h2>
          <p className="text-xs text-quaternary max-w-lg">
            A top 10 list of all the cryptocurrencies in the last 24 hours{" "}
            <br />
            (Ordered by ranking)
          </p>
        </p>
        <header className="px-4 grid grid-cols-12 place-items-center rounded-full bg-secondary/80 py-4">
          {/* <div className="">???</div> */}
          <div className="px-4">???</div>
          <div className="px-4 text-secondary mr-auto">
            <RiNumbersFill />
          </div>
          <div className="place-self-start my-auto font-semibold text-secondary">
            ????&nbsp;Coin
          </div>
          <div className="col-span-2 font-semibold text-secondary">
            ???????&nbsp;Price
          </div>
          <div className="col-span-2 font-semibold text-secondary">
            ????&nbsp;7 Days
          </div>
          <div className="font-semibold text-secondary">????&nbsp;24h</div>
          <div className="col-span-2 hidden md:block font-semibold text-secondary">
            24h Volume
          </div>
          <div className="col-span-2 hidden sm:block font-semibold text-secondary">
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
