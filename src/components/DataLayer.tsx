import { Outlet } from "react-router-dom";
import useLoadDBWatchlist from "../hooks/useLoadDBWatchlist";
import useLoadInitData from "../hooks/useLoadInitData";
import DataErrorModal from "./DataErrorModal";

const DataLayer = () => {
  // Load the initial data
  useLoadInitData();

  // Load watchlist coins from database
  useLoadDBWatchlist();

  return (
    <>
      <Outlet />

      {/* any app-data related error will invoke a modal */}
      <DataErrorModal />
    </>
  );
};

export default DataLayer;
