import { useEffect } from "react";
import Tabs from "../components/ui/Tabs";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import routeConfig from "../config/routeConfig";
import { useAppSelector } from "../redux/store";
import { selectInitDataStatusSlice } from "../redux/initDataStatusSlice";
import useIsOverallDataError from "../hooks/useIsOverallDataError";
import useReloadData from "../hooks/useReloadData";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import NoDataErr from "../components/NoDataErr";
import { selectTopCoinsData } from "../redux/topCoinsSlice";
import Header from "../components/ui/Header";

const ExplorePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/dashboard/tables") {
      navigate(routeConfig.routeLinking.topCoins.path);
    }
  }, [location.pathname, navigate]);

  const { initDataStatus } = useAppSelector(selectInitDataStatusSlice);

  // checking the exisitance of any one of the initial data (topcoins, exchanges, trending) is fine as we are only interested in checking if the error is from initial data fetch (and show NoDataErr component) or from the reload data fetch. Rest we can rely on the isOverallErr
  const topCoins = useAppSelector(selectTopCoinsData);

  const { overallDataError } = useIsOverallDataError();
  const reloadDataState = useReloadData();

  if (initDataStatus === "loading") {
    return (
      <div className="h-full w-full overflow-hidden flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <div className="lg:hidden">
        <Header title="" time="state" />
      </div>

      <Tabs />

      {overallDataError && !topCoins && (
        <NoDataErr reloadHandler={reloadDataState} />
      )}
      <Outlet />

      {/* spacer */}
      <div className="xl:hidden h-28" />
    </div>
  );
};

export default ExplorePage;
