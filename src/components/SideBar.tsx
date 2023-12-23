import React from "react";
import { Link, useLocation } from "react-router-dom";
import appIcons from "../config/appIcons";
import routeConfig, { ILinkItemProps } from "../config/routeConfig";
import { authSelectors } from "../redux/authSlice";
import { useAppSelector } from "../redux/store";
import Brand from "./ui/Brand";

const SideBarLinkItem: React.FC<ILinkItemProps> = ({
  id,
  selected,
  children,
  to,
}) => {
  return (
    <Link
      id={id}
      className={`flex items-center px-4 py-2 text-sm mt-5 rounded-2xl text-primary transition-colors duration-200 ease-in-out dark:secondary  dark:hover:text-gray-200 ${
        selected === id
          ? "bg-primary dark:bg-purple-600 "
          : "bg-transparent hover:bg-gray-300/60 dark:hover:bg-gray-700"
      }`}
      to={to}
    >
      {children}
    </Link>
  );
};

const SideBar = function () {
  const user = useAppSelector(authSelectors.authUser);

  const path = useLocation();

  return (
    <div className="hidden lg:flex font-poppins flex-grow-0 flex-col w-40 2xl:w-64 h-[95vh] py-8 text-textLighter text-center">
      {/* BRANDING */}
      <div className="mt-4">
        <Brand />
      </div>
      {/* PROFILE */}
      <div className="flex flex-col items-center mt-6">
        {!user?.photoURL ? (
          appIcons.user
        ) : (
          <img
            className="object-cover w-20 h-20 mx-2 rounded-full border border-primary mt-1"
            src={user?.photoURL ? user.photoURL : ""}
            alt={user?.displayName ? user.displayName : "user"}
          />
        )}

        <h4 className="mx-2 font-medium text-secondary dark:text-gray-200 hover:underline">
          {user?.displayName ? user.displayName : "user"}
        </h4>
        <p className="mx-2 mt-1 text-sm font-medium text-quaternary dark:text-gray-400 hover:underline">
          {user?.email ? user.email : "user@exapmle.com"}
        </p>
      </div>
      {/* NAVIGATION */}
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          {routeConfig.sidebarRoutes.map((route) => {
            return (
              <SideBarLinkItem
                key={route.id}
                id={route.id}
                selected={path.pathname.split("/")[2]}
                to={route.path}
              >
                {appIcons[route.id]}
                <span className="mx-4 font-medium">{route.name}</span>
              </SideBarLinkItem>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
