import React, { useEffect } from "react";
import CoinInfoCard from "../components/coins/CoinInfoCard";
import { CoinState } from "../uitls/contexts/CoinContext";
import { allCoins } from "../data/all-coins/all-coin-markets";
import CoinsReport from "../components/coins/CoinsReport";

import Header from "../components/ui/Header";
// import axios from "axios";

const DashBoard = () => {
  const currency = CoinState();
  useEffect(() => {
    console.log(currency);
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
      <Header title="Top Currencies" />

      <div className="flex justify-between items-center h-full">
        <div className="w-full h-full flex flex-col items-center overflow-y-auto pb-20 space-y-20">
          <div className="p-2 grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 md:gap-8 lg:gap-20">
            <CoinInfoCard graphColor={"blue"} data={allCoins[0]} />
            <CoinInfoCard graphColor={"green"} data={allCoins[1]} />
            <CoinInfoCard graphColor={"red"} data={allCoins[2]} />
          </div>

          {/* coins reports */}
          <div className="w-full grid md:grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-14 2xl:gap-x-32 lg:px-4">
            <div className="lg:col-span-1 w-full max-w-xl mx-auto">
              <CoinsReport title="Winners" subtitle="Mkt cap (24h)" />
            </div>
            <div className="lg:col-span-1 w-full lg:row-span-2 max-w-xl mx-auto">
              <CoinsReport title="Exchanges" subtitle="(24h)" />
            </div>
            <div className="lg:col-span-1 w-full max-w-xl mx-auto">
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
