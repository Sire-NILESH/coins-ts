import React, { useEffect } from "react";
import CoinInfoCard from "../components/coins/CoinInfoCard";
import { CoinState } from "../uitls/CoinContext";
import { allCoins } from "../data/all-coins/all-coin-markets";
import { CiCalendarDate } from "react-icons/ci";
import CoinsReport from "../components/coins/CoinsReport";
import HeaderButton from "../components/ui/HeaderButton";
import HeaderTitle from "../components/ui/HeaderTitle";
// import axios from "axios";

const DashBoard = () => {
  const currency = CoinState();
  useEffect(() => {
    // console.log(currency);
  }, [currency]);

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   function fetchAPI() {
  //     // var abortCont = new AbortController();

  //     const options = {
  //       method: "GET",
  //       url: "https://bloomberg-market-and-financial-news.p.rapidapi.com/market/auto-complete",
  //       params: { query: "<REQUIRED>" },
  //       headers: {
  //         "X-RapidAPI-Key":
  //           "57f2d7b8b5msh0276544036dbedap1f27eajsn03e1a7b7f2ad",
  //         "X-RapidAPI-Host":
  //           "bloomberg-market-and-financial-news.p.rapidapi.com",
  //       },
  //       // signals: abortCont.signal,
  //     };

  //     axios
  //       .request(options)
  //       .then(function (response) {
  //         setData(response.data);
  //         console.log(response.data);
  //         console.log(response.data);
  //       })
  //       .catch(function (error) {
  //         console.error(error);
  //       });
  //   }

  //   fetchAPI();

  //   return () => {
  //     // abortCont.abort();
  //     fetchAPI();
  //   };
  // }, []);

  return (
    <div className="h-full w-full overflow-hidden">
      <header className="flex items-center justify-between mb-5">
        <HeaderTitle title="Top Currencies" />
        <div className="">
          <ul className="flex items-center gap-8 uppercase text-xs font-semibold text-slate-400">
            <li className="font-bold text-slate-600">D</li>
            <li className="cursor-pointer">W</li>
            <li className="cursor-pointer">M</li>
            <li className="cursor-pointer">Y</li>
            <li className="cursor-pointer">ALL</li>
            <li>
              <CiCalendarDate className="h-5 w-5 text-slate-600" />
            </li>
            <li>
              <HeaderButton title="View all" />
            </li>
          </ul>
        </div>
      </header>

      <div className="flex justify-between items-center h-full">
        <div className="w-full h-full flex flex-col items-center overflow-y-auto pb-20 space-y-20 px-4">
          <div className="p-2 grid md:grid-cols-2 xl:grid-cols-3 md:gap-8 xl:gap-20">
            <CoinInfoCard graphColor={"blue"} data={allCoins[0]} />
            <CoinInfoCard graphColor={"green"} data={allCoins[1]} />
            <CoinInfoCard graphColor={"red"} data={allCoins[2]} />
          </div>

          {/* coins reports */}
          <div className="w-full flex flex-col flex-wrap md:grid md:grid-cols-2 md:grid-rows-2 gap-x-32 px-4">
            <div className="lg:col-span-1">
              <CoinsReport title="Winners" subtitle="Mkt cap (24h)" />
            </div>
            <div className="lg:col-span-1 lg:row-span-2">
              <CoinsReport title="Exchanges" subtitle="(24h)" />
            </div>
            <div className="lg:col-span-1 mt-auto ">
              <CoinsReport title="Trending" subtitle="(24h)" />
            </div>
            {/* <CoinsReport title="Losers" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
