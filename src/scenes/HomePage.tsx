import React from "react";
import { Link } from "react-router-dom";
import routeConfig from "./../config/routeConfig";

const HomePage = () => {
  return (
    <div className="h-full w-full flex flex-col items-center space-y-4">
      <p className="font-semibold text-primary text-3xl">Home Page</p>
      <Link
        className="bg-purple-500 hover:bg-purple-400 text-white rounded-full px-4 py-2"
        to={routeConfig.routeLinking.overview.path}
      >
        Dashboard
      </Link>
      <Link
        className="bg-purple-500 hover:bg-purple-400 text-white rounded-full px-4 py-2"
        to={routeConfig.routeLinking.login.path}
      >
        Login
      </Link>
      <Link
        className="bg-purple-500 hover:bg-purple-400 text-white rounded-full px-4 py-2"
        to={routeConfig.routeLinking.register.path}
      >
        Register
      </Link>
    </div>
  );
};

export default HomePage;
