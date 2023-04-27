import React, { useMemo, useState } from "react";
import { exchangesData } from "./../data/exchanges/exchangesData";
import { Exchange } from "./../../typing.d";
import { formatCurrency } from "../uitls/helper";
import { useAppSelector } from "../redux/store";
import LoadingSpinner from "./ui/LoadingSpinner";
import PaginationV2 from "./ui/PaginationV2";
import Search from "./ui/Search";

const totalPages = 10;
const pageEnteries = 10;

const TableRow: React.FC<{ data: Exchange }> = ({ data }) => {
  return (
    <tr>
      <td className="p-2 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-10 min-w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
            <img
              className="rounded-full bg-white"
              src={data.image}
              width="40"
              height="40"
              alt={data.name}
            />
          </div>
          <div className="font-medium text-tertiary sm:text-xs">
            {data.name}
          </div>
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left font-bold text-tertiary">
          {data.country ? data.country : "--"}
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">
          {data.year_established ? data.year_established : "--"}
        </div>
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
        <div className=" text-center text-tertiary">
          {formatCurrency(data.trade_volume_24h_btc_normalized, 1)} BTC
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className=" text-center text-tertiary">{data.trust_score}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className=" text-center text-tertiary">
          {data.trust_score_rank}
        </div>
      </td>
    </tr>
  );
};

const ExchangesTable: React.FC = () => {
  const {
    isLoading,
    data: allExchanges,
    isError,
  } = useAppSelector((state) => state.allExchanges);

  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState("");

  const searchHandler = (query: string) => {
    setSearch(query);
  };

  const pageHandler = (page: number) => {
    if (page <= totalPages && page >= 1) setPage(page);
  };

  // const searchHandler = () => {
  //   if (search.trim().length > 0) {
  //     console.log("inside search handler", search);
  //     const temp = allExchanges?.filter((coin) =>
  //       coin.name.toLowerCase().includes(search)
  //     );

  //     if (temp && temp.length > 0) {
  //       return temp;
  //     }
  //   } else if (allExchanges) return allExchanges;
  //   return [];
  // };

  const finalData = useMemo(
    function () {
      if (search.trim().length > 0) {
        console.log("Memooo inside search handler", search);
        const temp = allExchanges?.filter((coin) =>
          coin.name.toLowerCase().includes(search)
        );

        if (temp && temp.length > 0) {
          setPage(1);
          return temp;
        }
      } else if (allExchanges) return allExchanges;
      return [];
    },
    [allExchanges, search]
  );

  if (isLoading && !isError) {
    return (
      <div className="h-full w-full overflow-hidden flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  console.log("All exchanges : ", allExchanges);

  console.log("Page number", page);

  return (
    <>
      {allExchanges && allExchanges.length > 0 && (
        <section className="antialiased w-full text-gray-600 h-screen px-4">
          <div className="h-full space-y-10">
            {/*  Table */}
            <div className="w-full rounded-3xl max-w-full mx-auto bg-primary border border-gray-200 dark:border-primary">
              <header className="flex flex-col space-y-4 sm:flex-row items-center justify-between px-5 py-4">
                <div className="w-full">
                  <h2 className="font-semibold text-lg text-secondary">
                    Exchanges
                  </h2>
                  <p className="text-xs text-quaternary max-w-lg">
                    List of all exchanges, Active with trading volumes in the
                    last 24 hours
                    <br />
                    (Ordered by Trust score rank)
                  </p>
                </div>
                <Search setSearch={setSearch} />
                {/* <Search setSearch={setSearch} searchHandler={searchHandler} /> */}
              </header>
              {/* <HeaderTitle title="Trending" /> */}

              <div className="p-3">
                <div className="overflow-x-auto">
                  <table className="table-auto w-full">
                    <thead className="text-xs font-semibold uppercase text-gray-400 mb-5 ">
                      <tr className="">
                        <th className="px-4 py-4 whitespace-nowrap rounded-l-3xl bg-secondary">
                          <div className="font-semibold text-left">Name</div>
                        </th>
                        <th className="p-2 py-4 whitespace-nowrap bg-secondary">
                          <div className="font-semibold text-left">Country</div>
                        </th>
                        <th className="p-2 py-4 whitespace-nowrap bg-secondary">
                          <div className="font-semibold text-left">
                            Year Est.
                          </div>
                        </th>
                        <th className="p-2 py-4 whitespace-nowrap bg-secondary">
                          <div className="font-semibold text-left">
                            Trading Incentive
                          </div>
                        </th>
                        <th className="p-2 py-4 whitespace-nowrap bg-secondary">
                          <div className="font-semibold text-left">
                            Volume (24h)
                          </div>
                        </th>
                        <th className="p-2 py-4 whitespace-nowrap bg-secondary">
                          <div className="font-semibold text-left">
                            Volume Norm. (24h)
                          </div>
                        </th>

                        <th className="p-2 py-4 whitespace-nowrap bg-secondary">
                          <div className="font-semibold text-center">
                            Trust Score
                          </div>
                        </th>
                        <th className="p-2 py-4 whitespace-nowrap rounded-r-3xl bg-secondary">
                          <div className="font-semibold text-center">
                            Trust Score Rank
                          </div>
                        </th>
                      </tr>
                    </thead>

                    <tbody className="text-sm divide-y divide-gray-200 dark:divide-stone-700">
                      {finalData
                        .slice(
                          (page - 1) * pageEnteries,
                          (page - 1) * pageEnteries + pageEnteries
                        )
                        .map((data) => (
                          <TableRow data={data} key={data.name} />
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
              // totalPages={totalPages}
            />
          </div>
        </section>
      )}
    </>
  );
};

export default ExchangesTable;
