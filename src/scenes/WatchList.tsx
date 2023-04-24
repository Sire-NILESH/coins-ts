import React from "react";
import CoinCard from "../components/coins/CoinCard";
import { allCoins } from "../data/all-coins/all-coin-markets";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import TableRowData from "../components/ui/TableRowData";
import Pagination from "../components/ui/Pagination";
import { BsCalendar4Week, BsClock } from "react-icons/bs";
import { colorCode } from "./../uitls/helper";
import LineChart from "../components/graph/nivo/LineChart";
import Header from "../components/ui/Header";
// { alignment }: { alignment: "horizontal" | "vertical" }
const Divider = () => {
  return (
    <div className="hidden md:block h-20 border-r-2 border-primary dark:border-gray-700"></div>
  );
};

const WatchList = () => {
  return (
    <div className="h-full w-full overflow-scroll space-y-6">
      <Header title="Watchlist Coins" />
      <main>
        <>
          <div className="h-[25rem] mb-10">
            {/* <ChartMd color="green" type="year" /> */}
            <LineChart />
          </div>
          <div className="space-y-7 h-full overflow-y-scroll bg-secondary p-3 md:p-4 rounded-2xl">
            {allCoins.map((coin, i) => {
              return (
                // ROW, h-40 sm:w-80 md:w-full
                <div className="w-full flex flex-col md:flex-row items-center justify-around bg-primary rounded-2xl py-2 dark:border dark:border-stone-700">
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
                  <div className="py-4 px-4 w-80 h-28 border-y-[1px] dark:border-stone-700 md:border-0">
                    <Sparklines data={coin.sparkline_in_7d.price} margin={6}>
                      <SparklinesLine
                        style={{
                          strokeWidth: 1,
                          stroke: "#336aff",
                          fill: "#336aff",
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
                    <p className="text-xs text-center text-secondary flex items-center gap-2 justify-center">
                      <BsCalendar4Week className="inline h-3 w-3 text-tertiary" />
                      In past 7 days
                    </p>
                  </div>

                  {/* DIVIDER */}
                  <Divider />

                  {/* 24 HOURS */}
                  <div className="py-3 px-4 w-80">
                    <div className="flex items-center justify-between">
                      <p className="text-primary flex items-center gap-2">
                        {" "}
                        <BsClock className="inline h-4 w-4 text-tertiary" />
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
            <Pagination className="flex justify-center md:w-80 mx-auto" />
          </div>
        </>
      </main>
    </div>
  );
};

export default WatchList;
