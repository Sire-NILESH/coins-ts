import { useEffect } from "react";
import Tabs from "../components/ui/Tabs";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const CoinsTable = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/tables") {
      navigate("top-coins");
    }
  }, [location.pathname, navigate]);
  return (
    <div className="overflow-hidden">
      <Tabs />

      <Outlet />

      {/* spacer */}
      <div className="xl:hidden h-28" />
    </div>
  );
};

export default CoinsTable;
