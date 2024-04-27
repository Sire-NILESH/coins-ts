import { Coin } from "../../typing";
import appIcons from "../config/appIcons";
import CoinOvertime from "./CoinOvertime";
import CoinIntro from "./coins/CoinIntro";
import Divider from "./ui/Divider";
import AppSparklines from "./AppSparklines";
import { Link } from "react-router-dom";
import routeConfig from "../config/routeConfig";

type Props = {
  coin: Coin;
};

const CardDivider = <Divider vertical className="hidden md:block h-20" />;
// w-80
const WatchlistCoinCard = ({ coin }: Props) => {
  return (
    <div className="mx-auto w-full max-w-[20rem] sm:w-80 md:max-w-full md:w-full flex flex-col md:flex-row items-center justify-around bg-card text-card-foreground rounded-2xl py-2">
      {/* COIN NAME,IMG AND BASIC STATS */}
      <Link
        className="max-w-[20rem] w-full"
        to={`${routeConfig.routeLinking.coin.path}/${coin.id}`}
      >
        <CoinIntro
          className="py-4 px-2 w-full h-28 cursor-pointer"
          coin={{
            name: coin.name,
            image: coin.image,
            rank: coin.market_cap_rank,
            statsRows: [
              { name: "Price", value: coin["current_price"] },
              { name: "Total supply", value: coin["total_supply"] },
              { name: "Market cap", value: coin["market_cap"] },
            ],
          }}
        />
      </Link>

      {/* DIVIDER */}
      {CardDivider}

      {/* SPARKLINES */}
      <div className="py-4 px-4 max-w-[20rem] w-full h-28 border-y-[1px] border-border md:border-0">
        <AppSparklines data={coin.sparkline_in_7d.price} />
        <p className="text-xs text-center text-card-foreground/60 flex items-center gap-2 justify-center">
          {appIcons.calendar}
          {"In past 7 days"}
        </p>
      </div>

      {/* DIVIDER */}
      {CardDivider}

      {/* 24 HOURS */}
      <CoinOvertime
        className="py-3 px-4 max-w-[20rem] w-full"
        data={{
          heading: "Past 24h",
          checkPerfromaceOver: coin.market_cap_change_24h,
          statsRows: [
            { name: "Price", value: coin["price_change_24h"] },
            { name: "High", value: coin["high_24h"] },
            { name: "Low", value: coin["low_24h"] },
            { name: "Market cap", value: coin["market_cap_change_24h"] },
          ],
        }}
      />
    </div>
  );
};

export default WatchlistCoinCard;
