import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { useNavigate, useLocation } from "react-router-dom";
import BottomBar from "./BottomBar";
import routeConfig from "../config/routeConfig";
import DataLayer from "./DataLayer";
import DataErrorModal from "./DataErrorModal";

const DashboardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      navigate(routeConfig.routeLinking.overview.path);
    }
  }, [location.pathname, navigate]);

  return (
    <div className="w-[100vw] max-w-[85rem] flex flex-col md:flex-row gap-2 lg:gap-5 xl:gap-10 justify-center sm:px-6 lg:px-6 xl:px-0">
      <DataLayer />
      <DataErrorModal />

      <SideBar />

      <main className="w-[100%] xl:w-[80vw] h-[100vh] sm:h-[95vh] overflow-y-scroll shadow sm:rounded-3xl bg-primary dark:bg-slate-900 py-4 xl:py-10 px-4 3xl:px-12">
        <Outlet />
      </main>

      <BottomBar />
    </div>
  );
};

export default DashboardLayout;
