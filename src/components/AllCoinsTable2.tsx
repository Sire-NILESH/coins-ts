import React from "react";
import { exchangesData } from "./../data/exchanges/exchangesData";
import { Coin, Exchange } from "./../../typing.d";
import { formatCurrency } from "../uitls/helper";
import { allCoins } from "../data/all-coins/all-coin-markets";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import { AiOutlineStar } from "react-icons/ai";

const TableRow: React.FC<{ data: Coin }> = ({ data }) => {
  return (
    <tr>
      <td className="p-2 whitespace-nowrap">
        <div className="text-center font-bold text-tertiary">
          <AiOutlineStar className="mx-auto h-4 w-4 text-tertiary" />
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="flex items-center">
          <div className="max-w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
            <img
              className="rounded-full"
              src={data.image}
              width="40"
              height="40"
              alt={data.name}
            />
          </div>
          <div className="font-medium text-tertiary">{data.name}</div>
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left text-green-500">
          {`$${data.current_price}`}
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div
          className={`text-left font-medium ${
            data.price_change_24h > 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {`${formatCurrency(data.price_change_24h, 3)}%`}
        </div>
      </td>

      <td className="p-2 whitespace-nowrap">
        <div className=" text-left text-tertiary">
          {`$${formatCurrency(data.total_volume, 1)}`}
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className=" text-left text-tertiary">
          {`$${formatCurrency(data.market_cap, 1)}`}
        </div>
      </td>
      <td className="p-2 min-w-[6rem] whitespace-nowrap">
        {/* <div className="text-left">{data.circulating_supply}</div> */}
        <div className="">
          <Sparklines data={data.sparkline_in_7d.price} margin={6}>
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
        </div>
      </td>
    </tr>
  );
};

const AllCoinsTable2: React.FC = () => {
  return (
    <section className="antialiased w-full text-gray-600 h-screen px-4">
      <div className=" h-full">
        {/* <!-- Table --> */}
        <div className="w-full rounded-3xl max-w-full mx-auto bg-primary border dark:border-primary">
          <header className="px-5 py-4">
            <h2 className="font-semibold text-lg text-secondary">
              Top ten Coins
            </h2>
            <p className="text-xs text-quaternary max-w-lg">
              A top 10 list of all the cryptocurrencies in the last 24 hours{" "}
              <br />
              (Ordered by ranking)
            </p>
          </header>
          {/* <HeaderTitle title="Trending" /> */}

          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 mb-5 ">
                  <tr className="">
                    <th className="px-4 py-4 whitespace-nowrap rounded-l-3xl bg-secondary">
                      <div className="font-semibold text-left">Star</div>
                    </th>
                    <th className="p-2 py-4 whitespace-nowrap bg-secondary">
                      <div className="font-semibold text-left">Name</div>
                    </th>
                    <th className="p-2 py-4 whitespace-nowrap bg-secondary">
                      <div className="font-semibold text-left">Price</div>
                    </th>
                    <th className="p-2 py-4 whitespace-nowrap bg-secondary">
                      <div className="font-semibold text-left">24H</div>
                    </th>
                    <th className="p-2 py-4 whitespace-nowrap bg-secondary">
                      <div className="font-semibold text-left">
                        Volume (24H)
                      </div>
                    </th>
                    <th className="p-2 py-4 whitespace-nowrap bg-secondary">
                      <div className="font-semibold text-left">Market cap</div>
                    </th>
                    <th className="p-2 py-4 whitespace-nowrap rounded-r-3xl bg-secondary">
                      <div className="font-semibold text-left">Week</div>
                    </th>
                  </tr>
                </thead>

                <tbody className="text-sm divide-y divide-gray-200 dark:divide-stone-700">
                  {allCoins.map((data) => (
                    <TableRow data={data} key={data.name} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCoinsTable2;
