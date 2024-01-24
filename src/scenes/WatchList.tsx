import { Coin } from "../../typing";
import EmptyWatchlist from "../components/EmptyWatchlist";
import NoDataErr from "../components/NoDataErr";
import WatchlistCoinCard from "../components/WatchlistCoinCard";
import Header from "../components/ui/Header";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import Pagination from "../components/ui/Pagination";
import usePagination from "../hooks/usePagination";
import useReloadWatchlist from "../hooks/useReloadWatchlist";
import useWatchlistData from "../hooks/useWatchlistData";

const WatchList = () => {
  const {
    watchlistIsLoading,
    dbWatchlistedCoins,
    watchlistedCoinsData,
    watchlistIsError,
  } = useWatchlistData();

  const reloadWatchlist = useReloadWatchlist();

  const {
    pageData,
    currentPage,
    totalEnteries,
    pageSetter,
    totalPages,
    pageEnteries,
  } = usePagination<Coin>({
    dataList: watchlistedCoinsData ? watchlistedCoinsData : [],
    pageEnteries: 10, // the number of entries in each page
  });

  if (watchlistIsLoading && dbWatchlistedCoins.length === 0) {
    return (
      <div className="h-full w-full overflow-hidden flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!watchlistIsLoading && !dbWatchlistedCoins.length) {
    return <EmptyWatchlist />;
  }

  return (
    <div className="h-full w-full">
      <div className="pb-1 overflow-hidden">
        <Header title="Watchlist Coins" />
      </div>

      {watchlistIsError && !watchlistIsLoading ? (
        <NoDataErr reloadHandler={reloadWatchlist} />
      ) : (
        <main className="w-full">
          <p className="mt-5 md:mt-0 ml-5 text-xs text-secondary max-w-lg">
            {
              "Your very own list of watchlisted coins. (Ordered by Market cap). "
            }
          </p>

          <div className="my-6 h-screen overflow-auto space-y-7 bg-secondary py-3 md:p-4 rounded-2xl border dark:border-primary">
            {pageData.length > 0 ? (
              pageData.map((coin) => {
                return <WatchlistCoinCard key={coin.id} coin={coin} />;
              })
            ) : (
              <div className="h-full w-full overflow-hidden flex justify-center pt-28">
                <LoadingSpinner />
              </div>
            )}
          </div>

          <Pagination
            currentPage={currentPage}
            pageSetter={pageSetter}
            pageEnteries={pageEnteries}
            totalPages={totalPages}
            totalEnteries={totalEnteries}
          />

          {/* spacer */}
          <div className="xl:h-6 h-32" />
        </main>
      )}
    </div>
  );
};

export default WatchList;
