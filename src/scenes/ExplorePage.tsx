import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/ui/Header";
import Tabs from "../components/ui/Tabs";
import routeConfig from "../config/routeConfig";

const ExplorePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/dashboard/tables") {
      navigate(routeConfig.routeLinking.topCoins.path);
    }
  }, [location.pathname, navigate]);

  return (
    <div className="overflow-hidden">
      <div className="lg:hidden">
        <Header title="" />
      </div>

      <Tabs />

      <Outlet />

      {/* spacer */}
      <div className="xl:hidden h-28" />
    </div>
  );
};

export default ExplorePage;
