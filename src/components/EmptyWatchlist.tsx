import { Link } from "react-router-dom";
import routeConfig from "../config/routeConfig";
import Button from "./ui/Button";

const EmptyWatchlist = () => {
  return (
    <div className="h-full flex flex-col items-center text-center">
      <p className="mt-28 text-2xl font-semibold text-primary max-w-md">
        No watchlisted coins
      </p>
      <p className="mt-3 text-secondary max-w-md">
        {"You can click on ⭐ star button to watchlist a coin"}
      </p>

      <Link to={routeConfig.routeLinking.topCoins.path} className="mt-8">
        <Button className="w-36 flex items-center justify-center space-x-2 p-3 bg-white">
          <p className="text-center text-secondary text-sm">Try Now</p>
        </Button>
      </Link>
    </div>
  );
};

export default EmptyWatchlist;
