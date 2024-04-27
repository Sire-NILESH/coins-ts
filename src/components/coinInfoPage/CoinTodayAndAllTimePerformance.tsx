import CoinCardRow from "./CoinCardRow";
import { CoinInfo } from "../../../typing";
import { formatCurrency } from "../../uitls/helper";

type Props = {
  coin: CoinInfo;
};

const CoinTodayAndAllTimePerformance = ({ coin }: Props) => {
  return (
    <div className="bg-secondary sm:p-8 px-2 py-5 rounded-3xl">
      {/* ATH AND ATL ROW */}
      <div className="flex flex-wrap gap-5 justify-between">
        {/* HIGH/LOW TODAY */}
        <div className="w-[20rem] flex-1 rounded-3xl bg-card p-6">
          <header className="mb-3 font-bold py-1">
            <p className="uppercase text-sm tracking-widest text-primary">
              Today{" "}
            </p>
          </header>
          <div className="space-y-1">
            <CoinCardRow
              title="Current"
              value={coin.market_data.current_price["usd"]}
              prepend="$"
            />
            <CoinCardRow
              title="High"
              value={coin.market_data.high_24h["usd"]}
              prepend="$"
            />
            <CoinCardRow
              title="Low"
              value={coin.market_data.low_24h["usd"]}
              prepend="$"
            />
          </div>
        </div>

        {/* ATH CARD */}
        <div className="min-w-[20rem] flex-1 rounded-3xl bg-card p-6">
          <header className="mb-2 font-bold py-1">
            <p className="text-sm tracking-widest text-primary">ATH </p>
            <span className="[word-spacing:1px] font-normal text-sm">
              <span className="font-normal">All time high was on </span>{" "}
              <span className="font-semibold">{`${new Date(
                coin.market_data.ath_date["usd"]
              ).toUTCString()}`}</span>
            </span>
          </header>
          <p className="mb-1 text-xs [word-spacing:1.2px] text-card-foreground/70">
            ATH stood at{" "}
            <span className="text-green-600 font-semibold">
              {"$" + formatCurrency(coin.market_data.ath["usd"])}
            </span>
          </p>

          <p className="text-xs [word-spacing:1.2px] text-card-foreground/70">
            {coin.market_data.ath_change_percentage["usd"] < 0
              ? "Since then, down by "
              : "Since then, up by"}{" "}
            <span
              className={`${
                coin.market_data.ath_change_percentage["usd"] < 0
                  ? "text-red-600"
                  : "text-green-400"
              }  font-semibold`}
            >
              {formatCurrency(coin.market_data.ath_change_percentage["usd"]) +
                "%"}
            </span>
          </p>
        </div>

        {/* ATL CARD */}
        <div className="min-w-[20rem] flex-1 rounded-3xl bg-card p-6">
          <header className="mb-2 font-bold py-1">
            <p className="text-sm tracking-widest text-primary"> ATL </p>
            <span className="[word-spacing:1px] font-normal text-sm">
              <span className="font-normal">All time low was on </span>{" "}
              <span className="font-semibold">{`${new Date(
                coin.market_data.atl_date["usd"]
              ).toUTCString()}`}</span>
            </span>
          </header>
          <p className="mb-1 text-xs [word-spacing:1.2px] text-card-foreground/70">
            ATL stood at{" "}
            <span className="text-green-600 font-semibold">
              {"$" + formatCurrency(coin.market_data.atl["usd"])}
            </span>
          </p>

          <p className="text-xs [word-spacing:1.2px] text-card-foreground/70">
            {coin.market_data.atl_change_percentage["usd"] < 0
              ? "Since then, down by "
              : "Since then, up by "}{" "}
            <span
              className={`${
                coin.market_data.atl_change_percentage["usd"] < 0
                  ? "text-red-600"
                  : "text-green-600"
              }  font-semibold`}
            >
              {formatCurrency(coin.market_data.atl_change_percentage["usd"]) +
                "%"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoinTodayAndAllTimePerformance;
