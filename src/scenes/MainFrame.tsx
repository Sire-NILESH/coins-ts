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
    <div className="flex gap-10">
      <SideBar />
      <div className="w-[65vw] h-[95vh] overflow-y-scroll shadow border-t-white border-t-2 rounded-3xl border-l-2 border-l-gray-200/30 bg-primary dark:bg-stone-900 dark:border-t-emerald-800 dark:border-l-stone-500/30 py-4 xl:py-10 px-6 md:px-10 xl:px-12">
        <Outlet />
      </div>
    </div>
  );
};

export default MainFrame;
