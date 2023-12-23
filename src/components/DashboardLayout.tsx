import React, { memo, useEffect } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { useNavigate, useLocation } from "react-router-dom";
import BottomBar from "./BottomBar";
import routeConfig from "../config/routeConfig";

interface IProps {
  children?: React.ReactElement | React.ReactNode;
}

const DashboardLayout: React.FC<IProps> = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      navigate(routeConfig.routeLinking.overview.path);
    }
  }, [location.pathname, navigate]);

  return (
    <div className="w-[100vw] sm:w-[95vw] flex flex-col md:flex-row gap-2 lg:gap-10 justify-center">
      <SideBar />

      <main className="w-[100%] md:w-[95%] xl:w-[80vw] 2xl:w-[70vw] h-[100vh] sm:h-[95vh] overflow-y-scroll shadow sm:rounded-3xl bg-primary dark:bg-slate-900 py-4 xl:py-10 px-4 3xl:px-12">
        <Outlet />
      </main>

      <BottomBar />
    </div>
  );
};

export default memo(DashboardLayout);
