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
      <div className="w-[18rem] flex-1 flex-shrink-1 card-shadow-outline rounded-3xl bg-primary px-6 pt-6">
        <header className=" font-bold text-secondary py-1">
          <p className="uppercase text-sm tracking-widest text-blue-500">
            Past week{" "}
          </p>
        </header>
        <span className="[word-spacing:1px] font-normal text-sm text-tertiary">
          <span className=" font-normal">
            A look into last week's price performance
          </span>{" "}
        </span>
        {/* SPARKLINES */}
        <div className="pt-10 w-full md:h-28">
          <Sparklines data={coin.market_data.sparkline_7d.price} margin={6}>
            <SparklinesLine
              style={{
                strokeWidth: 1,
                stroke: "green",
                fill: "green",
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
      <div className="w-full md:w-[18rem] flex-1 card-shadow-outline rounded-3xl bg-primary p-6">
        <header className="font-bold text-secondary py-1">
          <p className="uppercase text-sm tracking-widest text-blue-500">
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
      <div className="min-w-[20rem] flex-1 rounded-3xl card-shadow-outline bg-primary p-6">
        <header className="mb-3 font-bold text-secondary py-1">
          <p className="uppercase text-sm tracking-widest text-blue-500">
            Market cap{" "}
          </p>
          <span className="[word-spacing:2px] font-normal text-sm text-tertiary">
            <span className=" font-normal">
              Fully diluted market capitalisation stands at{" "}
            </span>{" "}
            {coin.market_data?.fully_diluted_valuation["usd"] ? (
              <span className="font-semibold">{`$${Number(
                coin.market_data.fully_diluted_valuation["usd"].toFixed(2)
              ).toLocaleString()}`}</span>
            ) : null}
          </span>
        </header>
        <div className="space-y-1">
          <p className="mb-1 text-xs [word-spacing:1.2px] text-secondary">
            Ranks at spot{" "}
            <span className="text-green-600 font-semibold">
              {coin.market_cap_rank}
            </span>
          </p>

          <p className=" text-xs [word-spacing:1.2px] text-secondary">
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

          <p className="text-xs [word-spacing:1.2px] text-secondary">
            Since yesterday,{" "}
            <span
              className={`${
                coin.market_data.market_cap_change_percentage_24h > 0
                  ? "text-green-600"
                  : "text-red-600"
              } font-semibold`}
            >
              {Number(
                Number(
                  coin.market_data.market_cap_change_percentage_24h.toFixed(4)
                )
              ).toLocaleString()}
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
