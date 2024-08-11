import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import withSuspense from "./withSuspense";
import InitAuthCheck from "./InitAuthCheck";
import AppLayout from "./AppLayout";

const AuthProtectedLayout = withSuspense(
  lazy(() => import("./AuthProtectedLayout"))
);
const DashboardLayout = withSuspense(lazy(() => import("./DashboardLayout")));
const AllCoinsTable = withSuspense(lazy(() => import("./AllCoinsTable")));
const TrendingCoinsTable = withSuspense(
  lazy(() => import("./TrendingCoinsTable"))
);
const ExchangesTable = withSuspense(lazy(() => import("./ExchangesTable")));

const Marketing = withSuspense(lazy(() => import("../scenes/Marketing")));
const CheckingAuthPage = withSuspense(
  lazy(() => import("../scenes/CheckingAuthPage"))
);
const Overview = withSuspense(lazy(() => import("../scenes/Overview")));
const WatchList = withSuspense(lazy(() => import("../scenes/WatchList")));
const ExplorePage = withSuspense(lazy(() => import("../scenes/ExplorePage")));
const CoinPage = withSuspense(lazy(() => import("../scenes/CoinPage")));
const Login = withSuspense(lazy(() => import("../scenes/Login")));
const Register = withSuspense(lazy(() => import("../scenes/Register")));
const NotFound = withSuspense(lazy(() => import("../scenes/NotFound")));

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
