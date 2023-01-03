import React from "react";
import CoinCard from "../components/coins/CoinCard";
import { allCoins } from "../data/all-coins/all-coin-markets";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import TableRowData from "../components/ui/TableRowData";
import Pagination from "../components/ui/Pagination";
import { BsCalendar4Week, BsClock } from "react-icons/bs";
import { colorCode } from "./../uitls/helper";

// const colorCode = (value: number) => {
//   const code = {
//     positive: "bg-green-600",
//     neutral: "bg-yellow-600",
//     negative: "bg-red-600",
//     fallback: "bg-blue-600",
//   };

//   if (+value.toFixed(3) === 0.0) return code["neutral"];
//   else if (+value.toFixed(3) > 0.0) return code["positive"];
//   else if (+value.toFixed(3) < 0.0) return code["negative"];
//   else return code["fallback"];
// };

const Divider = () => {
  return <div className="h-20 border-r-2"></div>;
};

const WatchList = () => {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="font-semibold uppercase tracking-[6px] text-slate-500 text-2xl">
          All Currencies
        </h1>
      </header>
      <main>
        <>
          <div className="space-y-7 h-full overflow-y-scroll bg-blue-100/60 p-4 rounded-2xl">
            {allCoins.map((coin, i) => {
              return (
                // ROW, h-40
                <div className="items-center border flex justify-around bg-blue-50 rounded-2xl py-2">
                  <CoinCard
                    data={{
                      name: allCoins[i].name,
                      image: allCoins[i].image,
                      rank: allCoins[i].market_cap_rank,
                      OverAllchange:
                        allCoins[i].market_cap_change_percentage_24h,
                      currentPrice: allCoins[i]["current_price"],
                      total_supply: allCoins[i]["total_supply"],
                      marketCap: allCoins[i]["market_cap"],
                    }}
                  />

                  {/* DIVIDER */}
                  <Divider />

                  {/* SPARKLINES */}
                  <div className="py-4 px-4 w-80 h-28">
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
                          strokeWidth: 1,
                          fill: "white",
                        }}
                      />
                    </Sparklines>
                    <p className="text-xs text-center text-slate-600 flex items-center gap-2 justify-center">
                      <BsCalendar4Week className="inline h-3 w-3 text-slate-500" />
                      In past 7 days
                    </p>
                  </div>

                  {/* DIVIDER */}
                  <Divider />

                  {/* 24 HOURS */}
                  <div className="py-3 px-4 w-80">
                    <div className="flex items-center justify-between">
                      <p className="text-slate-900 flex items-center gap-2">
                        {" "}
                        <BsClock className="inline h-4 w-4 text-slate-500" />
                        Past 24h
                      </p>
                      <div
                        className={`w-3 justify-self-end rounded-full h-3 ${colorCode(
                          allCoins[i].market_cap_change_24h
                        )}`}
                      />
                    </div>
                    <>
                      <TableRowData
                        title={"Price"}
                        value={allCoins[i].price_change_24h}
                      />
                      <TableRowData
                        title={"High"}
                        value={allCoins[i].high_24h}
                      />
                      <TableRowData title={"Low"} value={allCoins[i].low_24h} />
                      <TableRowData
                        title={"Market cap"}
                        value={allCoins[i].market_cap_change_24h}
                      />
                    </>
                  </div>
                </div>
              );
            })}

            {/* PAGINATION */}
            <div>
              <Pagination className="w-80 mx-auto" />
            </div>
          </div>
        </>
      </main>
    </div>
  );
};

export default WatchList;
