import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/ui/Header";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import Tabs from "../components/ui/Tabs";
import routeConfig from "../config/routeConfig";
import { selectInitDataStatusSlice } from "../redux/initDataStatusSlice";
import { useAppSelector } from "../redux/store";

const ExplorePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/dashboard/tables") {
      navigate(routeConfig.routeLinking.topCoins.path);
    }
  }, [location.pathname, navigate]);

  const { initDataStatus } = useAppSelector(selectInitDataStatusSlice);

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

      <Outlet />

      {/* spacer */}
      <div className="xl:hidden h-28" />
    </div>
  );
};

export default ExplorePage;
