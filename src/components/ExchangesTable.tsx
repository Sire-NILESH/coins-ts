import React from "react";
import usePagination from "../hooks/usePagination";
import useSearch from "../hooks/useSearch";
import {
  selectExchnagesData,
  selectExchnagesIsError,
  selectExchnagesIsLoading,
} from "../redux/exchangesSlice";
import { useAppSelector } from "../redux/store";
import { formatCurrency } from "../uitls/helper";
import { Exchange } from "./../../typing.d";
import Pagination from "./ui/Pagination";
import Search from "./ui/Search";
import useReloadExchanges from "../hooks/useReloadExchanges";
import NoDataErr from "./NoDataErr";
import LoadingRowsSkeleton from "./LoadingRowsSkeleton";

const TableRow: React.FC<{ data: Exchange }> = ({ data }) => {
  return (
    <tr className={"table-rowHover-color"}>
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
        <div className="text-left text-tertiary">
          {data.year_established ? data.year_established : "--"}
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div
          className={`text-center font-medium ${
            data.has_trading_incentive
              ? "text-green-600 dark:text-green-500"
              : "text-red-500"
          }`}
        >
          {`${data.has_trading_incentive}`}
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-center font-medium text-green-600 dark:text-green-500">
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

const ExchangesTable = () => {
  const allExchanges = useAppSelector(selectExchnagesData);
  const isLoading = useAppSelector(selectExchnagesIsLoading);
  const isError = useAppSelector(selectExchnagesIsError);

  const reloadExchanges = useReloadExchanges();

  const searchFilter = (value: Exchange, searchQuery: string): boolean => {
    return value.name.toLowerCase().includes(searchQuery);
  };

  const { setSearch, searchFilteredData } = useSearch<Exchange>({
    dataList: allExchanges,
    searchFilterResolver: searchFilter,
  });

  const {
    pageData,
    currentPage,
    totalEnteries,
    pageSetter,
    totalPages,
    pageEnteries,
  } = usePagination<Exchange>({
    dataList: searchFilteredData,
    pageEnteries: 10, // the number of entries in each page
  });

  const dataIsAvailable = allExchanges && allExchanges.length > 0;

  if (!isLoading && isError && !dataIsAvailable) {
    return (
      <div className="h-full w-full overflow-hidden flex items-center justify-center">
        <NoDataErr reloadHandler={reloadExchanges} />
      </div>
    );
  }

  return (
    <>
      <section className="antialiased w-full text-gray-600 md:px-4">
        <div className="h-full space-y-10">
          {/*  Table */}
          <div className="w-full rounded-3xl max-w-full mx-auto bg-primary border border-gray-200 dark:border-primary">
            <header className="flex flex-col gap-4 sm:flex-row items-center justify-between px-5 py-4">
              <div className="w-full">
                <h2 className="font-semibold text-lg text-secondary">
                  Exchanges
                </h2>
                <p className="text-xs text-tertiary max-w-lg">
                  {
                    "List of all exchanges, Active with trading volumes in the last 24 hours"
                  }
                  <br />
                  {"(Ordered by Trust score rank)"}
                </p>
              </div>
              <Search setSearch={setSearch} />
            </header>

            <div className="p-3">
              <div className="overflow-x-auto">
                {/* loading skeleton */}
                <LoadingRowsSkeleton isLoading={isLoading} rowCount={11} />

                {dataIsAvailable && !isLoading && (
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

                    <tbody className="text-sm divide-y divide-gray-200 dark:divide-gray-700">
                      {pageData.map((exchange) => (
                        <TableRow data={exchange} key={exchange.name} />
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>

          <Pagination
            currentPage={currentPage}
            pageSetter={pageSetter}
            pageEnteries={pageEnteries}
            totalPages={totalPages}
            totalEnteries={totalEnteries}
          />
        </div>
      </section>
    </>
  );
};

export default ExchangesTable;
