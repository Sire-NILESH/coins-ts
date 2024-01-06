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
  explore: {
    id: "explore",
    path: "/dashboard/explore/top-coins",
    name: "Explore",
    pathName: "explore",
  },
  topCoins: {
    id: "topCoins",
    path: "/dashboard/explore/top-coins",
    name: "Top coins",
    pathName: "top-coins",
  },
  trending: {
    id: "trending",
    path: "/dashboard/explore/trending",
    name: "Trending",
    pathName: "trending",
  },
  exchanges: {
    id: "exchanges",
    path: "/dashboard/explore/exchanges",
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
    name: "Error",
  },
} as const;

const sidebarRoutes = [
  routeLinking.overview,
  routeLinking.explore,
  routeLinking.watchlist,
  // routeLinking.notFound,
] as const;

const bottombarRoutes = sidebarRoutes;
// const bottombarRoutes = [...sidebarRoutes, routeLinking.notFound];

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
