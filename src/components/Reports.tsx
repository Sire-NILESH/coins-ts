import React from "react";
import WinnersReport from "./coins/WinnersReport";
import ExchangesReport from "./coins/ExchangesReport";
import TrendingReport from "./coins/TrendingReport";

const Reports = () => {
  return (
    <div className="w-full grid md:grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-14 2xl:gap-x-32 sm:px-4 md:px-0 lg:px-4">
      <div className="lg:col-span-1 w-full max-w-xl mx-auto">
        <WinnersReport />
      </div>

      <div className="lg:col-span-1 w-full lg:row-span-2 max-w-xl mx-auto">
        <ExchangesReport />
      </div>

      <div className="lg:col-span-1 w-full max-w-xl mx-auto">
        <TrendingReport />
      </div>
    </div>
  );
};

export default Reports;
