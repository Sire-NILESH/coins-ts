import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./scenes/Login";
import MainFrame from "./scenes/MainFrame";
import NotFound from "./scenes/NotFound";
import WatchList from "./scenes/WatchList";
import AllCoinsTable2 from "./components/AllCoinsTable2";
import ExchangesTable from "./components/ExchangesTable";
import Providers from "./components/Providers";
import TrendingCoinsTable from "./components/TrendingCoinsTable";
import { setDataFetchTime } from "./redux/dataFetchTimeSlice";
import { fetchExchanges } from "./redux/exchangesSlice";
import { useAppDispatch } from "./redux/store";
import { fetchTopCoins } from "./redux/topCoinsSlice";
import { fetchTrending } from "./redux/trendingCoinsSlice";
import CoinPage from "./scenes/CoinPage";
import CoinsTable from "./scenes/CoinsTable";
import DashBoard from "./scenes/DashBoard";
import Register from "./scenes/Register";
import AppLayout from "./components/AppLayout";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("loading initial top coins...");
    dispatch(fetchTopCoins());
    dispatch(fetchExchanges());
    dispatch(fetchTrending());
    dispatch(setDataFetchTime(Date.now()));
  }, [dispatch]);

  return (
    <Providers>
      <AppLayout>
        <Routes>
          <Route path="/" element={<MainFrame />}>
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="watchlist" element={<WatchList />} />
            <Route path="tables/" element={<CoinsTable />}>
              <Route path="top-coins" element={<AllCoinsTable2 />} />
              <Route path="trending" element={<TrendingCoinsTable />} />
              <Route path="exchanges" element={<ExchangesTable />} />
            </Route>
            <Route path="coin">
              <Route path=":coinId" element={<CoinPage />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppLayout>
    </Providers>
  );
}

export default App;
