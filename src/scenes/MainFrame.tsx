import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import { useNavigate, useLocation } from "react-router-dom";

interface IProps {
  children?: React.ReactElement | React.ReactNode;
}

const MainFrame: React.FC<IProps> = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/dashboard");
    }
  }, [location.pathname, navigate]);

  // if(location.pathname === '/')
  return (
    <div className="w-[95vw] flex gap-2 lg:gap-10 justify-center">
      <SideBar />
      <div className="w-[100%] md:w-[90%] xl:w-[80vw] 2xl:w-[70vw] h-[95vh] overflow-y-scroll shadow border-t-white border-t-2 rounded-3xl border-l-2 border-l-gray-200/30 bg-primary dark:bg-slate-900 dark:border-t-emerald-800 dark:border-l-stone-500/30 py-4 xl:py-10 px-2 md:px-4 3xl:px-12">
        <Outlet />
      </div>
    </div>
  );
};

export default MainFrame;
