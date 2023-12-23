import { Route, Routes } from "react-router-dom";
import AllCoinsTable from "./components/AllCoinsTable";
import AppLayout from "./components/AppLayout";
import AuthProtectedLayout from "./components/AuthProtectedLayout";
import ExchangesTable from "./components/ExchangesTable";
import InitAuthCheck from "./components/InitAuthCheck";
import Providers from "./components/Providers";
import TrendingCoinsTable from "./components/TrendingCoinsTable";
import CoinPage from "./scenes/CoinPage";
import DashboardLayout from "./components/DashboardLayout";
import HomePage from "./scenes/HomePage";
import Login from "./scenes/Login";
import NotFound from "./scenes/NotFound";
import Overview from "./scenes/Overview";
import Register from "./scenes/Register";
import WatchList from "./scenes/WatchList";
import DataLayer from "./components/DataLayer";
import AllTables from "./scenes/AllTables";

function App() {
  return (
    <Providers>
      <Routes>
        {/* Checks for init auth user if any*/}
        <Route element={<InitAuthCheck />}>
          <Route element={<AppLayout />}>
            {/* Public routes */}
            <Route path="/" element={<HomePage />} />

            {/* Auth protected routes */}
            <Route element={<AuthProtectedLayout />}>
              <Route element={<DataLayer />}>
                <Route path="/dashboard/" element={<DashboardLayout />}>
                  <Route path="overview" element={<Overview />} />
                  <Route path="watchlist" element={<WatchList />} />
                  <Route path="tables/" element={<AllTables />}>
                    <Route path="top-coins" element={<AllCoinsTable />} />
                    <Route path="trending" element={<TrendingCoinsTable />} />
                    <Route path="exchanges" element={<ExchangesTable />} />
                  </Route>
                  <Route path="coin">
                    <Route path=":coinId" element={<CoinPage />} />
                  </Route>
                </Route>
              </Route>
            </Route>

            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </Providers>
  );
}

export default App;
