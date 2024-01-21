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

      {overallDataError ? (
        <NoDataErr reloadHandler={reloadDataState} />
      ) : (
        <Outlet />
      )}

      {/* spacer */}
      <div className="xl:hidden h-28" />
    </div>
  );
};

export default ExplorePage;
