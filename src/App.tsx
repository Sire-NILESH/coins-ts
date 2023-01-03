import { Route, Routes } from "react-router-dom";
import MainPage from "./scenes/MainPage";
import Login from "./scenes/Login";
import NotFound from "./scenes/NotFound";
import WatchList from "./scenes/WatchList2";
import { useEffect, useState } from "react";
import AllCoinsTable from "./scenes/AllCoinsTable";
// import axios from "axios";
import CoinsTable from "./scenes/WatchList";
import Coin from "./scenes/Coin";
import DashBoard from "./scenes/DashBoard";

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
    <div className="bg-blue-100 flex items-center justify-center h-screen w-screen font-poppins">
      {/* <SideBar /> */}
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="watchlist" element={<CoinsTable />} />
          <Route path="all-coins" element={<AllCoinsTable />} />
          <Route path="coin" element={<Coin />}>
            <Route path=":coinId" />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
