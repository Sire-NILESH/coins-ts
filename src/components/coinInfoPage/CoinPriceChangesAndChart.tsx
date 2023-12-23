import { CoinInfo } from "../../../typing";
import LineChart from "../graph/LineChart";
import CoinCardRow from "./CoinCardRow";

type Props = {
  coin: CoinInfo;
};

const CoinPriceChangesAndChart = ({ coin }: Props) => {
  return (
    <div className="flex flex-col-reverse items-start xl:space-x-10 xl:flex-row xl:justify-center xl:items-stretch mb-10 w-[100%] px-1">
      {/* <ChartMd color="green" type="year" /> */}
      {/* <LineChart single={true} /> */}
      <div className="space-y-4 w-full xl:w-[30%]">
        <div className="h-full w-full card-shadow-outline rounded-3xl bg-primary p-6">
          <header className="font-bold text-secondary py-1">
            <p className="uppercase text-sm tracking-widest text-blue-500">
              {/* <AiOutlinePieChart className="inline h-5 w-5 mr-1" /> */}
              Price Changes{" "}
            </p>
          </header>
          <span className="[word-spacing:1px] font-normal text-sm text-tertiary">
            <span className="">Over time price changes in percentage.</span>{" "}
          </span>
          <div className="mt-3 space-y-2">
            {coin.market_data.max_supply && (
              <CoinCardRow
                title="1 H"
                value={
                  coin.market_data.price_change_percentage_1h_in_currency["usd"]
                }
                appendString="%"
              />
            )}
            <CoinCardRow
              title="24 H"
              value={
                coin.market_data.price_change_percentage_24h_in_currency["usd"]
              }
              appendString="%"
            />
            <CoinCardRow
              title="7 D"
              value={
                coin.market_data.price_change_percentage_7d_in_currency["usd"]
              }
              appendString="%"
            />
            <CoinCardRow
              title="14 D"
              value={
                coin.market_data.price_change_percentage_14d_in_currency["usd"]
              }
              appendString="%"
            />
            <CoinCardRow
              title="30 D"
              value={
                coin.market_data.price_change_percentage_30d_in_currency["usd"]
              }
              appendString="%"
            />
            <CoinCardRow
              title="60 D"
              value={
                coin.market_data.price_change_percentage_60d_in_currency["usd"]
              }
              appendString="%"
            />
            <CoinCardRow
              title="200 D"
              value={
                coin.market_data.price_change_percentage_200d_in_currency["usd"]
              }
              appendString="%"
            />
            <CoinCardRow
              title="1 Y"
              value={
                coin.market_data.price_change_percentage_1y_in_currency["usd"]
              }
              appendString="%"
            />
          </div>
        </div>
      </div>

      <div className="w-full xl:w-[60%] card-shadow-outline dark:bg-gray-800 p-4 rounded-3xl mb-4 xl:mb-0">
        {/* <ChartMd color="green" type="day" size="lg" /> */}
        <LineChart coin={coin} />
      </div>
    </div>
  );
};

export default CoinPriceChangesAndChart;
