import React, { useState, useEffect } from "react";
import Brand from "./ui/Brand";
import { Link, useLocation } from "react-router-dom";
import routeConfig, { ILinkItemProps } from "../config/routeConfig";

const SideBarLinkItem: React.FC<ILinkItemProps> = ({
  id,
  selected,
  setSelected,
  children,
  to,
}) => {
  return (
    <Link
      id={id}
      className={`flex items-center px-4 py-2 text-sm mt-5 rounded-2xl text-primary  transition-colors duration-200 ease-in-out dark:secondary   dark:hover:text-gray-200 ${
        selected === id
          ? "bg-primary dark:bg-lime-600 "
          : "bg-transparent hover:bg-gray-300/60 dark:hover:bg-gray-700"
      }`}
      to={to}
      onClick={function (e) {
        setSelected(id);
      }}
    >
      {children}
    </Link>
  );
};

const SideBar = function () {
  const location = useLocation();

  const [selected, setSelected] = useState(
    `/${location.pathname.split("/")[1]}` || "/dashboard"
  );

  useEffect(() => {
    setSelected(`/${location.pathname.split("/")[1]}` || "/dashboard");

    return () => {};
  }, [location.pathname]);

  return (
    <div className="hidden lg:flex font-poppins flex-grow-0 flex-col w-40 2xl:w-64 h-[95vh] py-8 text-textLighter text-center">
      {/* BRANDING */}
      <Brand />
      {/* PROFILE */}
      <div className="flex flex-col items-center mt-6">
        <img
          className="object-cover w-20 h-20 mx-2 rounded-full border border-primary mt-1"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="avatar"
        />
        <h4 className="mx-2 font-medium text-secondary dark:text-gray-200 hover:underline">
          John Doe
        </h4>
        <p className="mx-2 mt-1 text-sm font-medium text-quaternary dark:text-gray-400 hover:underline">
          john@example.com
        </p>
      </div>
      {/* NAVIGATION */}
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          {routeConfig.routesLinking.map((item, i) => {
            return (
              <SideBarLinkItem
                id={routeConfig.routesLinking[i].id}
                selected={selected}
                setSelected={setSelected}
                to={routeConfig.routesLinking[i].pathName}
              >
                {routeConfig.icons[i]}
                <span className="mx-4 font-medium">
                  {routeConfig.routesLinking[i].name}
                </span>
              </SideBarLinkItem>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
