import { CoinInfo } from "../../../typing";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import CoinCardRow from "./CoinCardRow";
import { formatCurrency } from "../../uitls/helper";

type Props = {
  coin: CoinInfo;
};

const CoinMetrics = ({ coin }: Props) => {
  return (
    <div className="py-8 px-2 flex flex-wrap gap-8 justify-between">
      {/* PAST WEEK */}
      <div className="min-w-[18rem] flex-1 border border-border rounded-3xl px-6 pt-6">
        <header className=" font-bold text-secondary py-1">
          <p className="uppercase text-sm tracking-widest text-primary">
            Past week{" "}
          </p>
        </header>
        <span className="[word-spacing:1px] font-normal text-sm">
          <span className=" font-normal">
            A look into last week's price performance
          </span>{" "}
        </span>
        {/* SPARKLINES */}
        <div className="w-full mt-4">
          <Sparklines data={coin.market_data.sparkline_7d.price} margin={6}>
            <SparklinesLine
              style={{
                strokeWidth: 1,
                stroke: "green",
                fill: "transparent",
              }}
            />
            <SparklinesSpots
              size={1}
              style={{
                stroke: "#336aff",
                strokeWidth: 1,
                fill: "white",
              }}
            />
          </Sparklines>
        </div>
      </div>

      {/* SUPPLY */}
      <div className="w-full md:w-[20rem] flex-1 border border-border rounded-3xl p-6">
        <header className="font-bold py-1">
          <p className="uppercase text-sm tracking-widest text-primary">
            supply{" "}
          </p>
          <span className="[word-spacing:1px] font-normal text-sm text-tertiary">
            <span className=" font-normal">
              Amount of coins that have been created or mined
            </span>{" "}
          </span>
        </header>
        <div className="mt-3 space-y-1">
          {coin.market_data.total_supply && (
            <CoinCardRow
              title="Total"
              value={coin.market_data.total_supply}
              prepend="$"
            />
          )}
          {coin.market_data.max_supply && (
            <CoinCardRow
              title="Max"
              value={coin.market_data.max_supply}
              prepend="$"
            />
          )}
          <CoinCardRow
            title="Circulating"
            value={coin.market_data.circulating_supply}
            prepend="$"
          />
        </div>
      </div>

      {/* MARKET CAP */}
      <div className="min-w-[20rem] flex-1 rounded-3xl border border-border p-6">
        <header className="mb-3 font-bold py-1">
          <p className="uppercase text-sm tracking-widest text-primary">
            Market cap{" "}
          </p>
          <span className="[word-spacing:2px] font-normal text-sm">
            <span className="font-normal">
              Fully diluted market capitalisation stands at{" "}
            </span>{" "}
            {coin.market_data?.fully_diluted_valuation["usd"] ? (
              <span className="font-semibold">
                {"$" +
                  formatCurrency(
                    coin.market_data.fully_diluted_valuation["usd"]
                  )}
              </span>
            ) : null}
          </span>
        </header>
        <div className="space-y-1">
          <p className="mb-1 text-xs [word-spacing:1.2px] text-card-foreground/70">
            Ranks at spot{" "}
            <span className="text-green-600 font-semibold">
              {coin.market_cap_rank}
            </span>
          </p>

          <p className=" text-xs [word-spacing:1.2px] text-card-foreground/70">
            Past 24HR change{" "}
            <span
              className={`${
                coin.market_data.market_cap_change_24h > 0
                  ? "text-green-600"
                  : "text-red-600"
              } font-semibold`}
            >
              ${formatCurrency(coin.market_data.market_cap_change_24h)}
            </span>
          </p>

          <p className="text-xs [word-spacing:1.2px] text-card-foreground/70">
            Since yesterday,{" "}
            <span
              className={`${
                coin.market_data.market_cap_change_percentage_24h > 0
                  ? "text-green-600"
                  : "text-red-600"
              } font-semibold`}
            >
              {formatCurrency(
                coin.market_data.market_cap_change_percentage_24h,
                4
              )}
              %
            </span>
          </p>
          <footer className="!mt-4">
            <CoinCardRow
              title="Total Market cap"
              value={coin.market_data.market_cap["usd"]}
              prepend="$"
            />
          </footer>
        </div>
      </div>
    </div>
  );
};

export default CoinMetrics;
