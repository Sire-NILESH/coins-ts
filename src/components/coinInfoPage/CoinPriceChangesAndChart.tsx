import { CoinInfo } from "../../../typing";
import CoinPageWatchlistBtn from "../CoinPageWatchlistBtn";
import LineChart from "../graph/LineChart";
import Divider from "../ui/Divider";
import CoinCardRow from "./CoinCardRow";

type Props = {
  coin: CoinInfo;
};

const CoinPriceChangesAndChart = ({ coin }: Props) => {
  return (
    <div className="flex flex-col-reverse items-center xl:space-x-10 xl:flex-row xl:justify-center xl:items-stretch mb-10 w-[100%] px-1 text-card-foreground/70">
      <div className="flex-1 w-full max-w-3xl xl:w-[30%] border rounded-3xl p-6">
        <header className="font-bold py-1">
          <p className="uppercase text-sm tracking-widest text-primary">
            Price Changes{" "}
          </p>
        </header>
        <p className="[word-spacing:1px] font-normal text-xs text-tertiary">
          Over time price changes in percentage.
        </p>

        <div className="mt-5 flex flex-wrap justify-between gap-3">
          <div className="space-y-3 w-full md:w-[40%] xl:w-full">
            {coin.market_data.max_supply && (
              <CoinCardRow
                title="1 Hour"
                value={
                  coin.market_data.price_change_percentage_1h_in_currency["usd"]
                }
                appendString="%"
              />
            )}
            <CoinCardRow
              title="24 Hours"
              value={
                coin.market_data.price_change_percentage_24h_in_currency["usd"]
              }
              appendString="%"
            />
            <CoinCardRow
              title="7 Days"
              value={
                coin.market_data.price_change_percentage_7d_in_currency["usd"]
              }
              appendString="%"
            />
            <CoinCardRow
              title="14 Days"
              value={
                coin.market_data.price_change_percentage_14d_in_currency["usd"]
              }
              appendString="%"
            />
          </div>

          <Divider vertical className="hidden md:block xl:hidden" />

          <div className="space-y-3 w-full md:w-[40%] xl:w-full">
            <CoinCardRow
              title="30 Days"
              value={
                coin.market_data.price_change_percentage_30d_in_currency["usd"]
              }
              appendString="%"
            />
            <CoinCardRow
              title="60 Days"
              value={
                coin.market_data.price_change_percentage_60d_in_currency["usd"]
              }
              appendString="%"
            />
            <CoinCardRow
              title="200 Days"
              value={
                coin.market_data.price_change_percentage_200d_in_currency["usd"]
              }
              appendString="%"
            />
            <CoinCardRow
              title="1 Year"
              value={
                coin.market_data.price_change_percentage_1y_in_currency["usd"]
              }
              appendString="%"
            />
          </div>
        </div>

        {/* ADD TO WATCHLIST */}
        <CoinPageWatchlistBtn coinId={coin.id} />
      </div>

      <div className="flex-2 flex-shrink-0 w-full max-w-3xl xl:w-[60%] border p-6 rounded-3xl mb-4 xl:mb-0">
        <div className="mb-5">
          <header className="font-bold py-1">
            <p className="uppercase text-sm tracking-widest text-primary">
              Timeline Charts{" "}
            </p>
          </header>
          <p className="[word-spacing:1px] font-normal text-xs text-tertiary">
            Track the prices overtime using charts.
          </p>
        </div>

        <LineChart coin={coin} />
      </div>
    </div>
  );
};

export default CoinPriceChangesAndChart;
