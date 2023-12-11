import { CiViewBoard, CiViewTable } from "react-icons/ci";
import { BsGraphUp } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

const routesLinking = [
  { id: "/dashboard", name: "Dashboard", pathName: "dashboard" },
  { id: "/tables", name: "Tables", pathName: "tables" },
  { id: "/watchlist", name: "Watchlist", pathName: "watchlist" },
  // { id: "/coin", name: "Coin", pathName: "coin" },
  { id: "/not_found", name: "Not Found", pathName: "not_found" },
];

// maintain the order according to the the route ids above.
const icons = [
  <CiViewBoard className="h-5 w-5" />,
  <CiViewTable className="h-5 w-5" />,
  <BiUser className="h-5 w-5" />,
  <BsGraphUp className="h-5 w-5" />,
  <BsGraphUp className="h-5 w-5" />,
];

export interface ILinkItemProps {
  id: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  to: string;
  children: React.ReactNode;
}

const routeConfig = {
  routesLinking,
  icons,
};

export default routeConfig;
