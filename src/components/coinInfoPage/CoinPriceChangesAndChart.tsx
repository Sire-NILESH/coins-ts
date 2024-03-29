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
    <div className="flex flex-col-reverse items-center xl:space-x-10 xl:flex-row xl:justify-center xl:items-stretch mb-10 w-[100%] px-1">
      <div className="h-full w-full max-w-3xl xl:w-[30%] card-shadow-outline rounded-3xl bg-primary p-6">
        <header className="font-bold text-secondary py-1">
          <p className="uppercase text-sm tracking-widest text-blue-500">
            Price Changes{" "}
          </p>
        </header>
        <span className="[word-spacing:1px] font-normal text-sm text-tertiary">
          <span className="text-xs">
            Over time price changes in percentage.
          </span>{" "}
        </span>
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

      <div className="w-full max-w-3xl xl:w-[60%] card-shadow-outline dark:bg-gray-800 p-4 rounded-3xl mb-4 xl:mb-0">
        <LineChart coin={coin} />
      </div>
    </div>
  );
};

export default CoinPriceChangesAndChart;
