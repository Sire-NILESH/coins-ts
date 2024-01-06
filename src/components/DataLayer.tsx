import useLoadDBWatchlist from "../hooks/useLoadDBWatchlist";
import useLoadInitData from "../hooks/useLoadInitData";

const DataLayer = () => {
  // Load the initial data
  useLoadInitData();

  // Load watchlist coins from database
  useLoadDBWatchlist();

  return <></>;
};

export default DataLayer;
