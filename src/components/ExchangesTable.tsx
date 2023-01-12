import React from "react";
import { exchangesData } from "./../data/exchanges/exchangesData";
import { Exchange } from "./../../typing.d";
import { formatCurrency } from "../uitls/helper";

const TableRow: React.FC<{ data: Exchange }> = ({ data }) => {
  return (
    <tr>
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
          <div className="font-medium text-slate-500">{data.name}</div>
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left font-bold text-slate-500">{data.country}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">{data.year_established}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div
          className={`text-center font-medium ${
            data.has_trading_incentive ? "text-green-500" : "text-red-500"
          }`}
        >
          {`${data.has_trading_incentive}`}
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className=" text-center text-green-500">
          {formatCurrency(data.trade_volume_24h_btc, 1)} BTC
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className=" text-center text-slate-500">
          {formatCurrency(data.trade_volume_24h_btc_normalized, 1)} BTC
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className=" text-center text-slate-500">{data.trust_score}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className=" text-center text-slate-500">
          {data.trust_score_rank}
        </div>
      </td>
    </tr>
  );
};

const ExchangesTable: React.FC = () => {
  return (
    <section className="antialiased w-full text-gray-600 h-screen px-4">
      <div className=" h-full">
        {/* <!-- Table --> */}
        <div className="w-full rounded-3xl max-w-full mx-auto bg-blue-50  border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-lg text-slate-600">Exchanges</h2>
            <p className="text-xs text-slate-400 max-w-lg">
              List of all exchanges, Active with trading volumes in the last 24
              hours
              <br />
              (Ordered by Trust score rank)
            </p>
          </header>
          {/* <HeaderTitle title="Trending" /> */}

          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 mb-5 ">
                  <tr className="">
                    <th className="px-4 py-4 whitespace-nowrap rounded-l-3xl bg-blue-100/60">
                      <div className="font-semibold text-left">Name</div>
                    </th>
                    <th className="p-2 py-4 whitespace-nowrap bg-blue-100/60">
                      <div className="font-semibold text-left">Country</div>
                    </th>
                    <th className="p-2 py-4 whitespace-nowrap bg-blue-100/60">
                      <div className="font-semibold text-left">Year EST</div>
                    </th>
                    <th className="p-2 py-4 whitespace-nowrap bg-blue-100/60">
                      <div className="font-semibold text-left">
                        Trading Incentive
                      </div>
                    </th>
                    <th className="p-2 py-4 whitespace-nowrap bg-blue-100/60">
                      <div className="font-semibold text-left">
                        Volume (24h)
                      </div>
                    </th>
                    <th className="p-2 py-4 whitespace-nowrap bg-blue-100/60">
                      <div className="font-semibold text-left">
                        Volume Norm. (24h)
                      </div>
                    </th>

                    <th className="p-2 py-4 whitespace-nowrap bg-blue-100/60">
                      <div className="font-semibold text-center">
                        Trust Score
                      </div>
                    </th>
                    <th className="p-2 py-4 whitespace-nowrap rounded-r-3xl bg-blue-100/60">
                      <div className="font-semibold text-center">
                        Trust Score Rank
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody className="text-sm divide-y divide-gray-200">
                  {exchangesData.map((data) => (
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

export default ExchangesTable;
