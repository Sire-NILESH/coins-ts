import React from "react";

const Brand = () => {
  return (
    <a
      href="/login"
      className=" font-bold text-3xl flex items-center text-slate-700 dark:text-slate-300"
    >
      <img
        src="images/logo.svg"
        className="bg-sky-50 rounded-3xl block h-12 w-12 mr-2"
        alt="react-logo"
      />
      Cryp<span className="text-blue-500">Track</span>
    </a>
  );
};

export default Brand;
