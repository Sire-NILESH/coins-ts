const routeLinking = {
  home: {
    id: "home",
    path: "/",
    name: "Home",
    pathName: "",
  },
  overview: {
    id: "overview",
    path: "/dashboard/overview",
    name: "Overview",
    pathName: "overview",
  },
  tables: {
    id: "tables",
    path: "/dashboard/tables/top-coins",
    name: "Tables",
    pathName: "tables",
  },
  topCoins: {
    id: "topCoins",
    path: "/dashboard/tables/top-coins",
    name: "Top coins",
    pathName: "top-coins",
  },
  trending: {
    id: "trending",
    path: "/dashboard/tables/trending",
    name: "Trending",
    pathName: "trending",
  },
  exchanges: {
    id: "exchanges",
    path: "/dashboard/tables/exchanges",
    name: "Exchanges",
    pathName: "exchanges",
  },
  watchlist: {
    id: "watchlist",
    path: "/dashboard/watchlist",
    name: "Watchlist",
    pathName: "watchlist",
  },
  coin: {
    id: "coin",
    path: "/dashboard/coin",
    name: "coin",
    pathName: "coin",
  },
  register: {
    id: "register",
    path: "/register",
    name: "Register",
    pathName: "register",
  },
  login: {
    id: "login",
    path: "/login",
    name: "Login",
    pathName: "login",
  },
  notFound: {
    id: "notFound",
    path: "/not-found",
    name: "Not Found",
  },
} as const;

const sidebarRoutes = [
  routeLinking.overview,
  routeLinking.tables,
  routeLinking.watchlist,
  routeLinking.notFound,
] as const;

const bottombarRoutes = sidebarRoutes;

export interface ILinkItemProps {
  id: string;
  selected: string;
  to: string;
  children: React.ReactNode;
}

const routeConfig = {
  routeLinking,
  sidebarRoutes,
  bottombarRoutes,
};

export default routeConfig;
