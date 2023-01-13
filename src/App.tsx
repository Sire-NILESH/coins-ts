import { Route, Routes } from "react-router-dom";
import MainFrame from "./scenes/MainFrame";
import Login from "./scenes/Login";
import NotFound from "./scenes/NotFound";
import WatchList from "./scenes/WatchList";
import { useEffect, useState } from "react";
// import axios from "axios";
import Coin from "./scenes/Coin";
import DashBoard from "./scenes/DashBoard";
import CoinsTable from "./scenes/CoinsTable";
import ExchangesTable from "./components/ExchangesTable";
import TrendingCoinsTable from "./components/TrendingCoinsTable";
import AllCoinsTable2 from "./components/AllCoinsTable2";
import { ThemeProvider } from "./uitls/contexts/ThemeContext";

function App() {
  // const [darkMode, setDarkMode] = useState("");

  // useEffect(() => {
  //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     setDarkMode("dark");
  //   } else {
  //     setDarkMode("");
  //   }

  //   if (darkMode === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }

  //   return () => {
  //     setDarkMode();
  //   };
  // }, [darkMode]);

  // className="h-screen w-screen bg-[#f2f2f2]"

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   function fetchAPI() {
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
  //     };

  //     axios
  //       .request(options)
  //       .then(function (response) {
  //         setData(response.data);
  //         console.log(data);
  //       })
  //       .catch(function (error) {
  //         console.error(error);
  //       });
  //   }

  //   fetchAPI();

  //   return () => {
  //     fetchAPI();

  // }, []);

  console.log("hello from app js");

  return (
    <ThemeProvider>
      <div className="bg-secondary text-slate-700 dark-bg flex items-center justify-center h-screen w-screen font-poppins">
        {/* <SideBar /> */}

        <Routes>
          <Route path="/" element={<MainFrame />}>
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="watchlist" element={<WatchList />} />
            <Route path="all_coins/" element={<CoinsTable />}>
              {/* <Route path="top_coins" element={<AllCoinsTable />} /> */}
              <Route path="top_coins" element={<AllCoinsTable2 />} />
              <Route path="trending" element={<TrendingCoinsTable />} />
              <Route path="exchanges" element={<ExchangesTable />} />
            </Route>
            <Route path="coin" element={<Coin />}>
              <Route path=":coinId" />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
