import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

// bg-neumorphic
const MainPage = () => {
  return (
    <div className="flex gap-10">
      <SideBar />
      <div className="w-[65vw] h-[95vh] overflow-y-scroll shadow border-t-white border-t-2 rounded-3xl border-l-2 border-l-gray-200/30 bg-blue-50 py-4 xl:py-10 px-6 md:px-10 xl:px-12">
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;
