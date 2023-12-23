import React, { useMemo, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import { Coin } from "../../typing";
import routeConfig from "../config/routeConfig";
import { useAppSelector } from "../redux/store";
import { formatCurrency } from "../uitls/helper";
import LoadingSpinner from "./ui/LoadingSpinner";
import PaginationV2 from "./ui/PaginationV2";
import Search from "./ui/Search";

const pageEnteries = 10;

const TableRow: React.FC<{ data: Coin; onClickNavigateTo: string }> = ({
  data,
  onClickNavigateTo,
}) => {
  return (
    <tr>
      <td className="p-2 whitespace-nowrap">
        <div className="text-center font-bold text-tertiary">
          <AiOutlineStar className="mx-auto h-4 w-4 text-tertiary" />
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left font-bold text-tertiary">
          <p className="font-medium uppercase  text-tertiary">
            {" "}
            &nbsp; {data.market_cap_rank}
          </p>
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <Link to={onClickNavigateTo}>
          <div className="flex items-center">
            <div className="w-8 min-w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
              <img
                className="rounded-full bg-white"
                src={data.image}
                width="40"
                height="40"
                alt={data.name}
              />
            </div>
            <div className="flex space-x-3 items-center">
              <p className="font-medium text-primary">{data.name}</p>
              <p className="font-medium uppercase  text-tertiary">
                {" "}
                {data.symbol}
              </p>
            </div>
          </div>
        </Link>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left text-green-500">
          {`$${
            data.current_price < 10
              ? data.current_price
              : formatCurrency(data.current_price, 3)
          }`}
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

const AllCoinsTable: React.FC = () => {
  const {
    isLoading,
    data: allCoins,
    isError,
  } = useAppSelector((state) => state.topCoins);

  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState("");

  const finalData = useMemo(
    function () {
      if (search.trim().length > 0) {
        const temp = allCoins?.filter(
          (coin) =>
            coin.name.toLowerCase().includes(search) ||
            coin.symbol.toLowerCase().includes(search)
        );

        if (temp && temp.length > 0) {
          setPage(1);
          return temp;
        }
      } else if (allCoins) return allCoins;
      return [];
    },
    [allCoins, search]
  );

  const pageHandler = (page: number) => {
    if (page <= Math.ceil(finalData.length / 10) && page >= 1) setPage(page);
  };

  if (isLoading && !isError) {
    return (
      <div className="h-full w-full overflow-hidden flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="">
      {allCoins && allCoins?.length > 0 && (
        <section className="mt-5 antialiased text-gray-600 md:px-4">
          <div className="h-full space-y-10">
            {/*  Table  */}
            <div className="w-full rounded-3xl max-w-full mx-auto bg-primary border dark:border-primary">
              <header className="flex flex-col gap-4 sm:flex-row items-center justify-between px-5 py-4">
                <div className="w-full">
                  <h2 className="font-semibold text-lg text-secondary">
                    Top 250 Coins
                  </h2>
                  <p className="text-xs text-quaternary max-w-lg">
                    A top 250 list of all the cryptocurrencies in the last 24
                    hours <br />
                    (Ordered by Market cap)
                  </p>
                </div>
                <Search setSearch={setSearch} />
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
                          <div className="font-semibold text-left">Rank</div>
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
                          <div className="font-semibold text-left">
                            Market cap
                          </div>
                        </th>
                        <th className="p-2 py-4 whitespace-nowrap rounded-r-3xl bg-secondary">
                          <div className="font-semibold text-left">Week</div>
                        </th>
                      </tr>
                    </thead>

                    <tbody className="text-sm divide-y divide-gray-200 dark:divide-gray-700">
                      {finalData
                        .slice(
                          (page - 1) * pageEnteries,
                          (page - 1) * pageEnteries + pageEnteries
                        )
                        .map((data, index) => (
                          <TableRow
                            onClickNavigateTo={`${routeConfig.routeLinking.coin.path}/${data.id}`}
                            data={data}
                            key={data.name}
                          />
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <PaginationV2
              currentPage={page}
              pageSetter={pageHandler}
              pageEnteries={pageEnteries}
              totalPages={Math.ceil(finalData.length / 10)}
              totalEnteries={finalData.length}
            />
          </div>
        </section>
      )}
    </div>
  );
};

export default AllCoinsTable;
