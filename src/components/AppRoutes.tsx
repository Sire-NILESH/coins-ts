import { Route, Routes } from "react-router-dom";
import InitAuthCheck from "./InitAuthCheck";
import AppLayout from "./AppLayout";
import AuthProtectedLayout from "./AuthProtectedLayout";
import DashboardLayout from "./DashboardLayout";
import Overview from "../scenes/Overview";
import WatchList from "../scenes/WatchList";
import ExplorePage from "../scenes/ExplorePage";
import AllCoinsTable from "./AllCoinsTable";
import TrendingCoinsTable from "./TrendingCoinsTable";
import ExchangesTable from "./ExchangesTable";
import CoinPage from "../scenes/CoinPage";
import Login from "../scenes/Login";
import Register from "../scenes/Register";
import NotFound from "../scenes/NotFound";
import CheckingAuthPage from "../scenes/CheckingAuthPage";
import Marketing from "../scenes/Marketing";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Checks for init auth user if any*/}
      <Route element={<InitAuthCheck />}>
        <Route element={<AppLayout />}>
          {/* Public routes */}
          <Route path="/" element={<Marketing />} />

          {/* Auth protected routes */}
          <Route element={<AuthProtectedLayout />}>
            <Route path="/dashboard/" element={<DashboardLayout />}>
              <Route path="overview" element={<Overview />} />
              <Route path="watchlist" element={<WatchList />} />
              <Route path="explore/" element={<ExplorePage />}>
                <Route path="top-coins" element={<AllCoinsTable />} />
                <Route path="trending" element={<TrendingCoinsTable />} />
                <Route path="exchanges" element={<ExchangesTable />} />
              </Route>
              <Route path="coin">
                <Route path=":coinId" element={<CoinPage />} />
              </Route>
            </Route>
          </Route>

          {/* Public routes */}
          <Route path="/auth/">
            <Route path="check-auth-status" element={<CheckingAuthPage />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
