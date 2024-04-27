import React from "react";
import { Link, useLocation } from "react-router-dom";
import appIcons from "../config/appIcons";
import routeConfig, { ILinkItemProps } from "../config/routeConfig";
import useLogout from "../hooks/useLogout";
import { authSelectors } from "../redux/authSlice";
import { useAppSelector } from "../redux/store";
import Avatar from "./ui/Avatar";
import Brand from "./ui/Brand";
import Divider from "./ui/Divider";

const SideBarLinkItem: React.FC<ILinkItemProps> = ({
  id,
  selected,
  children,
  to,
}) => {
  return (
    <Link
      id={id}
      to={to}
      className={`sidebar-item text-white line-clamp-1 ${
        selected === id
          ? "bg-blue-50 !text-brandshade"
          : "bg-transparent hover:bg-white/20"
      }`}
    >
      {children}
    </Link>
  );
};

const SideBar = function () {
  const path = useLocation();

  const user = useAppSelector(authSelectors.authUser);
  const { logoutHandler } = useLogout();

  return (
    <div className="rounded-3xl bg-brandshade px-4 hidden lg:flex font-poppins flex-grow-0 flex-col w-44 2xl:w-64 h-[95vh] py-8 text-textLighter text-center">
      {/* BRANDING */}
      <div className="mt-4">
        <Brand isOnColouredBg />
      </div>

      {/* PROFILE */}
      <div className="flex flex-col items-center mt-6">
        <Avatar
          avatarSize="lg"
          className="mt-1 !text-blue-50 !border-blue-50"
          src={user?.photoURL ? user.photoURL : ""}
          alt={user?.displayName ? user.displayName : "user"}
        />

        <h4 className="text-sm 2xl:text-base mt-2 mx-2 font-medium text-white hover:underline">
          {user?.displayName ? user.displayName : "user"}
        </h4>
        <p className="mx-2 mt-1 text-xs 2xl:text-sm text-blue-200 hover:underline line-clamp-1">
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

          <Divider horizonatal className="mt-5 mx-3 !border-white/20" />

          {/* LOGOUT BTN */}
          <button
            type="button"
            onClick={logoutHandler}
            className="w-full sidebar-item text-white hover:bg-blue-50 hover:text-brandshade line-clamp-1"
          >
            {appIcons["logout"]}
            <span className="mx-4 font-medium">{"Logout"}</span>
          </button>
        </nav>
      </div>

      <div className="flex flex-col items-center text-white space-y-2">
        <p className="text-xs text-white/40">Powered by</p>
        <a
          href={"https://www.coingecko.com/"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <img src="/images/coinGecko.png" className="w-6" alt="" />
          <p className="text-sm">CoinGecko API</p>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
