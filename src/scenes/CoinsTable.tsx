import React, { useEffect } from "react";
import Tabs from "../components/ui/Tabs";
// import AllCoinsTable from "../components/AllCoinsTable";
// import TrendingCoinsTable from "./../components/TrendingCoinsTable";
// import ExchangesTable from "./../components/ExchangesTable";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const CoinsTable = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/all_coins") {
      navigate("top_coins");
    }
  }, [location.pathname, navigate]);
  return (
    <div>
      <Tabs />
      {/* <AllCoinsTable /> */}
      {/* <TrendingCoinsTable /> */}
      {/* <ExchangesTable /> */}
      <Outlet />
    </div>
  );
};

export default CoinsTable;
