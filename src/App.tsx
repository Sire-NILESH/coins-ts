import { Route, Routes } from "react-router-dom";
import MainFrame from "./scenes/MainFrame";
import Login from "./scenes/Login";
import NotFound from "./scenes/NotFound";
import WatchList from "./scenes/WatchList";
import { useEffect } from "react";
// import axios from "axios";
import Coin from "./scenes/Coin";
import DashBoard from "./scenes/DashBoard";
import CoinsTable from "./scenes/CoinsTable";
import ExchangesTable from "./components/ExchangesTable";
import TrendingCoinsTable from "./components/TrendingCoinsTable";
import AllCoinsTable2 from "./components/AllCoinsTable2";
import { ThemeProvider } from "./uitls/contexts/ThemeContext";
import CoinContext from "./uitls/contexts/CoinContext";
import { fetchTopCoins } from "./redux/topCoinsSlice";
import { useAppDispatch } from "./redux/store";
import { fetchExchanges } from "./redux/exchangesSlice";
import { fetchTrending } from "./redux/trendingCoinsSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("loading initial top coins...");
    dispatch(fetchTopCoins());
    dispatch(fetchExchanges());
    dispatch(fetchTrending());
  }, [dispatch]);

  return (
    <ThemeProvider>
      <CoinContext>
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
      </CoinContext>
    </ThemeProvider>
  );
}

export default App;
