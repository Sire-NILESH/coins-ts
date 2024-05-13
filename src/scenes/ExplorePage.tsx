import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/ui/Header";
import Tabs from "../components/ui/Tabs";
import routeConfig from "../config/routeConfig";

const ExplorePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const currentPathname = location.pathname.endsWith("/")
      ? location.pathname.slice(0, -1)
      : location.pathname;

    if (currentPathname === "/dashboard/explore") {
      navigate(routeConfig.routeLinking.topCoins.pathName);
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
