import React from "react";

// import ChartMd from "../components/graph/ChartMd";
// import { CoinArray } from "../../typing";
import { allCoins } from "../data/all-coins/all-coin-markets";
// import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";
// import { AiOutlinePieChart } from "react-icons/ai";
import { Sparklines } from "react-sparklines";
import { SparklinesLine } from "react-sparklines";
import { SparklinesSpots } from "react-sparklines";
import ChartMd from "../components/graph/ChartMd";
import Header from "../components/ui/Header";

// ONE YEAR AGO TIMESTAMP
// new Date().setFullYear(new Date().getFullYear() - 1)
// ONE YEAR AGO DATE
// new Date(new Date().setFullYear(new Date().getFullYear() - 1))

// console.log({"from":Math.round(new Date().setFullYear(new Date().getFullYear() - 1)/1000), "to": Math.round(Date.now()/1000)});

// `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;
// https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1392577232&to=1422577232

type IPropsRow = {
  title: string;
  value: number | string;
  prepend?: string;
  xs?: boolean;
};

// function isNumber(value: number | string): value is number {
//   // if (value !== null && typeof value === "number") return value as number;
//   return (value as number).toFixed() !== undefined

// }

const Row: React.FC<IPropsRow> = (props) => {
  return (
    <div className="flex justify-between">
      <span
        className={`${
          props.xs ? "text-xs" : "text-sm"
        } font-normal text-secondary mr-10`}
      >
        {props.title}
      </span>
      <span
        className={`${
          props.xs ? "text-xs" : "text-sm"
        } font-semibold text-green-600`}
      >
        {typeof props.value === "number"
          ? `${props.prepend ? props.prepend : ""}${Number(
              props.value?.toFixed(4)
            ).toLocaleString()}`
          : props.value}
      </span>
    </div>
  );
};

const Coin = () => {
  const coin = allCoins[0];
  return (
    <div>
      <Header title="Coin page" />

      <main className="w-full">
        {/* CHART  h-[25rem] h-[36rem]*/}
        <div className="flex justify-center mb-10 w-[100%] dark-bg lg:p-14 p-5 rounded-3xl">
          {/* <ChartMd color="green" type="year" /> */}
          {/* <LineChart single={true} /> */}
          <div className="w-full md:w-[80%]">
            <ChartMd color="green" type="day" size="lg" />
          </div>
        </div>

        {/* <div className="bg-secondary py-8 px-8 sm:px-2 sm:py-4 rounded-3xl"> */}
        <div className="bg-secondary sm:p-8 p-2 rounded-3xl">
          {/* ATH AND ATL ROW */}
          <div className="flex flex-wrap gap-5 justify-between">
            {/* HIGH/LOW TODAY */}
            <div className="w-[20rem] flex-1 dark:border dark:border-stone-700/80 rounded-3xl bg-primary p-6">
              <header className="mb-3 font-bold text-secondary py-1">
                <p className="uppercase text-sm tracking-widest text-blue-500">
                  Today{" "}
                </p>
              </header>
              <div className="space-y-1">
                <Row title="Current" value={coin.current_price} prepend="$" />
                <Row title="High" value={coin.high_24h} prepend="$" />
                <Row title="Low" value={coin.low_24h} prepend="$" />
              </div>
            </div>

            {/* ATH CARD */}
            <div className="min-w-[20rem] flex-1 dark:border dark:border-stone-700/80 rounded-3xl bg-primary p-6">
              <header className="mb-2 font-bold text-secondary py-1">
                <p className="text-sm tracking-widest text-blue-500">
                  ATH{" "}
                  {/* <RxTriangleUp className="inline w-6 h-6 text-green-600" /> ATH{" "} */}
                </p>
                <span className="[word-spacing:1px] font-normal text-sm text-tertiary">
                  <span className=" font-normal">All time high was on </span>{" "}
                  <span className="font-semibold">{`${new Date(
                    coin.ath_date
                  ).toUTCString()}`}</span>
                </span>
              </header>
              <p className="mb-1 text-xs [word-spacing:1.2px] text-secondary">
                ATH stands at{" "}
                <span className="text-green-600 font-semibold">
                  ${Number(coin.ath.toFixed(4)).toLocaleString()}
                </span>
              </p>

              <p className="text-xs [word-spacing:1.2px] text-secondary">
                {coin.ath_change_percentage < 0
                  ? "Since then, down by "
                  : "Since then, up by"}{" "}
                <span
                  className={`${
                    coin.ath_change_percentage < 0
                      ? "text-red-600"
                      : "text-green-400"
                  }  font-semibold`}
                >
                  {Number(
                    coin.ath_change_percentage.toFixed(2)
                  ).toLocaleString()}
                  %
                </span>
              </p>
            </div>

            {/* ATL CARD */}
            <div className="min-w-[20rem] flex-1 dark:border dark:border-stone-700/80 rounded-3xl bg-primary p-6">
              <header className="mb-2 font-bold text-secondary py-1">
                <p className="text-sm tracking-widest text-blue-500">
                  {" "}
                  ATL{" "}
                  {/* <RxTriangleDown className="inline w-6 h-6 text-red-600" /> ATL{" "} */}
                </p>
                <span className="[word-spacing:1px] font-normal text-sm text-tertiary">
                  <span className=" font-normal">All time low was on </span>{" "}
                  <span className="font-semibold">{`${new Date(
                    coin.atl_date
                  ).toUTCString()}`}</span>
                </span>
              </header>
              <p className="mb-1 text-xs [word-spacing:1.2px] text-secondary">
                ATL stood at{" "}
                <span className="text-green-600 font-semibold">
                  ${Number(coin.atl.toFixed(4)).toLocaleString()}
                </span>
              </p>

              <p className="text-xs [word-spacing:1.2px] text-secondary">
                {coin.atl_change_percentage < 0
                  ? "Since then, down by "
                  : "Since then, up by "}{" "}
                <span
                  className={`${
                    coin.atl_change_percentage < 0
                      ? "text-red-600"
                      : "text-green-600"
                  }  font-semibold`}
                >
                  {Number(
                    coin.atl_change_percentage.toFixed(2)
                  ).toLocaleString()}
                  %
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="py-8 flex flex-wrap gap-8 justify-between">
          {/* PAST WEEK */}
          <div className="w-[18rem] flex-1 flex-shrink-1 shadow rounded-3xl bg-primary px-6 pt-6">
            <header className=" font-bold text-secondary py-1">
              <p className="uppercase text-sm tracking-widest text-blue-500">
                Past week{" "}
              </p>
            </header>
            <span className="[word-spacing:1px] font-normal text-sm text-tertiary">
              <span className=" font-normal">
                A look into last week's price performance
              </span>{" "}
            </span>
            {/* SPARKLINES */}
            <div className="pt-10 w-full h-28">
              <Sparklines data={coin.sparkline_in_7d.price} margin={6}>
                <SparklinesLine
                  style={{
                    strokeWidth: 1,
                    stroke: "green",
                    fill: "green",
                  }}
                />
                <SparklinesSpots
                  size={1}
                  style={{
                    stroke: "#336aff",
                    strokeWidth: 1,
                    fill: "white",
                  }}
                />
              </Sparklines>
              {/* <p className="text-xs text-center text-secondary flex items-center gap-2 justify-center">
                <BsCalendar4Week className="inline h-3 w-3 text-tertiary" />
                In past 7 days
              </p> */}
            </div>
          </div>

          {/* SUPPLY */}
          <div className="w-[18rem] flex-1 shadow rounded-3xl bg-primary p-6">
            <header className="font-bold text-secondary py-1">
              <p className="uppercase text-sm tracking-widest text-blue-500">
                {/* <AiOutlinePieChart className="inline h-5 w-5 mr-1" /> */}
                supply{" "}
              </p>
            </header>
            <span className="[word-spacing:1px] font-normal text-sm text-tertiary">
              <span className=" font-normal">
                Amount of coins that have been created or mined
              </span>{" "}
            </span>
            <div className="mt-3 space-y-1">
              <div className="">
                {coin.total_supply && (
                  <Row title="Total" value={coin.total_supply} prepend="$" />
                )}
                {coin.max_supply && (
                  <Row title="Max" value={coin.max_supply} prepend="$" />
                )}
                <Row
                  title="Circulating"
                  value={coin.circulating_supply}
                  prepend="$"
                />
              </div>
            </div>
          </div>

          {/* MARKET CAP */}
          <div className="min-w-[20rem] flex-1 rounded-3xl shadow bg-primary p-6">
            <header className="mb-3 font-bold text-secondary py-1">
              <p className="uppercase text-sm tracking-widest text-blue-500">
                Market cap{" "}
              </p>
              <span className="[word-spacing:2px] font-normal text-sm text-tertiary">
                <span className=" font-normal">
                  Fully diluted market capitalisation stands at{" "}
                </span>{" "}
                {coin.fully_diluted_valuation ? (
                  <span className="font-semibold">{`$${Number(
                    coin.fully_diluted_valuation.toFixed(2)
                  ).toLocaleString()}`}</span>
                ) : null}
              </span>
            </header>
            <div className="space-y-1">
              <p className="mb-1 text-xs [word-spacing:1.2px] text-secondary">
                Ranks at spot{" "}
                <span className="text-green-600 font-semibold">
                  {coin.market_cap_rank}
                  {/* ${Number(coin.ath.toFixed(4)).toLocaleString()} */}
                </span>
              </p>

              {/* <Row
                title="Ranking"
                value={`${coin.market_cap_rank}`}
                xs={true}
              /> */}
              {/* <Row title="Total" value={coin.market_cap} prepend="$" /> */}
              <p className=" text-xs [word-spacing:1.2px] text-secondary">
                Past 24HR change{" "}
                <span className="text-green-600 font-semibold">
                  $
                  {Number(
                    Number(coin.market_cap_change_24h.toFixed(4))
                  ).toLocaleString()}
                </span>
              </p>

              <p className="text-xs [word-spacing:1.2px] text-secondary">
                Since yesterday,{" "}
                <span
                  className={` ${
                    coin.market_cap_change_percentage_24h > 0
                      ? "text-green-600"
                      : "text-red-600"
                  } font-semibold`}
                >
                  {Number(
                    Number(coin.market_cap_change_percentage_24h.toFixed(4))
                  ).toLocaleString()}
                  %
                </span>
              </p>
              {/* <p className="mb-3 block text-sm [word-spacing:1.2px] text-secondary">
                With market cap of{" "}
                <span className="text-green-600 font-semibold">
                  ${Number(coin.market_cap.toFixed(4)).toLocaleString()}
                </span>
              </p> */}
              <footer className="!mt-4">
                <Row
                  title="Total Market cap"
                  value={coin.market_cap}
                  prepend="$"
                />
              </footer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Coin;
