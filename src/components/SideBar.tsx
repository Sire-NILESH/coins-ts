import React, { useState, useEffect } from "react";
import Brand from "./ui/Brand";
import { Link, useLocation } from "react-router-dom";
import { CiViewBoard, CiViewTable } from "react-icons/ci";
import { BsGraphUp } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

// const ids = [
//   { id: "sdfke78ey", name: "Dashboard", pathName: "dashboard" },
//   { id: "n4wr8343", name: "All Coins", pathName: "all_coins" },
//   { id: "se3kj767u", name: "Watchlist", pathName: "watchlist" },
//   { id: "kj88yf3dd", name: "Coin", pathName: "coin" },
//   { id: "cbrg8r7wet", name: "Not Found", pathName: "not_found" },
// ];
const ids = [
  { id: "/dashboard", name: "Dashboard", pathName: "dashboard" },
  { id: "/all_coins", name: "All Coins", pathName: "all_coins" },
  { id: "/watchlist", name: "Watchlist", pathName: "watchlist" },
  { id: "/coin", name: "Coin", pathName: "coin" },
  { id: "/not_found", name: "Not Found", pathName: "not_found" },
];

const SideBar = function () {
  const location = useLocation();
  console.log(location.pathname.split("/")[1]);
  const [selected, setSelected] = useState(
    `/${location.pathname.split("/")[1]}` || "/dashboard"
  );

  useEffect(() => {
    setSelected(`/${location.pathname.split("/")[1]}` || "/dashboard");

    return () => {};
  }, [location.pathname]);

  return (
    <div className="hidden md:flex font-poppins flex-grow-0 flex-col lg:w-64 h-[95vh] py-8 text-slate-200 text-center">
      {/* BRANDING */}
      <Brand />
      {/* PROFILE */}
      <div className="flex flex-col items-center mt-6">
        <img
          className="object-cover w-20 h-20 mx-2 rounded-full border mt-1"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="avatar"
        />
        <h4 className="mx-2 font-medium text-slate-600 dark:text-gray-200 hover:underline">
          John Doe
        </h4>
        <p className="mx-2 mt-1 text-sm font-medium text-slate-400 dark:text-gray-400 hover:underline">
          john@example.com
        </p>
      </div>
      {/* NAVIGATION */}
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <Link
            id={ids[0].id}
            className={`flex items-center px-4 py-2 text-sm mt-5 rounded-2xl text-slate-700  transition-colors duration-200 ease-in-out dark:text-gray-200  dark:hover:bg-gray-700 dark:hover:text-gray-200 ${
              selected === ids[0].id
                ? "bg-gray-100"
                : "bg-transparent hover:bg-gray-300/60"
            }`}
            to={ids[0].pathName}
            onClick={function (e) {
              setSelected(ids[0].id);
            }}
          >
            <CiViewBoard className="h-5 w-5" />

            <span className="mx-4 font-medium">{ids[0].name}</span>
          </Link>

          <Link
            id={ids[1].id}
            className={`flex items-center px-4 py-2 text-sm mt-5 rounded-2xl text-slate-700  transition-colors duration-200 transform dark:text-gray-200  dark:hover:bg-gray-700 dark:hover:text-gray-200 ${
              selected === ids[1].id
                ? "bg-gray-100"
                : "bg-transparent hover:bg-gray-300/60"
            }`}
            to={ids[1].pathName}
            onClick={function (e) {
              setSelected(ids[1].id);
            }}
          >
            <CiViewTable className="h-5 w-5" />

            <span className="mx-4 font-medium">{ids[1].name}</span>
          </Link>

          <Link
            id={ids[2].id}
            className={`flex items-center px-4 py-2 text-sm mt-5 rounded-2xl text-slate-700  transition-colors duration-200 transform dark:text-gray-200  dark:hover:bg-gray-700 dark:hover:text-gray-200 ${
              selected === ids[2].id
                ? "bg-gray-100"
                : "bg-transparent hover:bg-gray-300/60"
            }`}
            to={ids[2].pathName}
            onClick={function (e) {
              setSelected(ids[2].id);
            }}
          >
            <BiUser className="h-5 w-5" />

            <span className="mx-4 font-medium">{ids[2].name}</span>
          </Link>

          <Link
            id={ids[3].id}
            className={`flex items-center px-4 py-2 text-sm mt-5 rounded-2xl text-slate-700  transition-colors duration-200 transform dark:text-gray-200  dark:hover:bg-gray-700 dark:hover:text-gray-200 ${
              selected === ids[3].id
                ? "bg-gray-100"
                : "bg-transparent hover:bg-gray-300/60"
            }`}
            onClick={function (e) {
              setSelected(ids[3].id);
            }}
            to={ids[3].pathName}
          >
            <BsGraphUp className="h-5 w-5" />

            <span className="mx-4 font-medium">{ids[3].name}</span>
          </Link>

          <Link
            id={ids[4].id}
            className={`flex items-center px-4 py-2 text-sm mt-5 rounded-2xl text-slate-700  transition-colors duration-200 transform dark:text-gray-200  dark:hover:bg-gray-700 dark:hover:text-gray-200 ${
              selected === ids[4].id
                ? "bg-gray-100"
                : "bg-transparent hover:bg-gray-300/60"
            }`}
            onClick={function (e) {
              setSelected(ids[4].id);
            }}
            to={ids[4].pathName}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="mx-4 font-medium">{ids[4].name}</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
