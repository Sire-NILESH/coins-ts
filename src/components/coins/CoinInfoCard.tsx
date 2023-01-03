import React from "react";
import ChartMd from "../graph/ChartMd";
// import SparkLine from "./graph/SparkLine";
import TableRowData from "../ui/TableRowData";
import CoinImage from "./CoinImage";
import { Coin } from "../../../typing";

const colorCode = (value: number): string => {
  const code = {
    positive: "bg-green-600",
    neutral: "bg-yellow-600",
    negative: "bg-red-600",
    fallback: "bg-blue-600",
  };

  if (+value.toFixed(3) === 0.0) return code["neutral"];
  else if (+value.toFixed(3) > 0.0) return code["positive"];
  else if (+value.toFixed(3) < 0.0) return code["negative"];
  else return code["fallback"];
};

// w-[19rem] shadow-xl border-t-2 border-white shadow-blue-100 rounded-3xl p-4 flex gap-2 flex-col
// w-[19rem] px-3 flex gap-2 flex-col

interface IProps {
  graphColor: "blue" | "green" | "red";
  data: Coin;
}

const CoinInfoCard: React.FC<IProps> = (props) => {
  return (
    <figure className="max-w-[19rem] px-3 flex gap-1 flex-col py-4 ">
      {/* TITLE */}
      <div className="flex items-center justify-between">
        <div className="flex items-center font-semibold text-base gap-1 ">
          <span className="border bg-slate-900 text-slate-50 border-slate-300 flex items-center justify-center rounded-full h-6 w-6">
            {props.data.market_cap_rank}
          </span>{" "}
          &nbsp;
          <CoinImage image={props.data.image} name={props.data.name} />
          <p className="text-slate-600">{props.data.name}</p>
        </div>
        <p className="font-bold text-normal text-slate-700">{`$${props.data.current_price}`}</p>
      </div>

      {/* GRAPH */}
      <div className="flex-[2] my-2">
        <ChartMd color={props.graphColor} type="day" />
        {/* <SparkLine sparkLineData={props.data["sparkline_in_7d"].price} /> */}
      </div>

      {/* RELATED DATA */}
      <div className="flex-1 space-y-2">
        <TableRowData title={"Market cap"} value={props.data.market_cap} />
        <TableRowData
          title={"Volume (24Hrs)"}
          value={props.data.total_volume}
        />
        <TableRowData
          title={"Circulating supply"}
          value={props.data.circulating_supply}
        />
        {props.data.total_supply ? (
          <TableRowData
            title={"Total supply"}
            value={props.data.total_supply}
          />
        ) : null}
      </div>

      {/* 24 Hrs stat */}
      <div className="mt-10 rounded-3xl bg-fuchsia-100 py-3 px-4">
        <div className="flex items-center mb-2 gap-2">
          <div
            className={`w-3 rounded-full h-3 ${colorCode(
              props.data.market_cap_change_percentage_24h
            )}`}
          />
          <p className="font-bold text-sm text-slate-500">Past 24 Hours</p>
        </div>
        <div className="flex-1 space-y-2">
          <TableRowData
            title={"Market cap"}
            value={props.data.market_cap_change_24h}
          />
          <TableRowData title={"Price"} value={props.data.price_change_24h} />
          <TableRowData title={"High"} value={props.data.high_24h} />
          <TableRowData title={"Low"} value={props.data.low_24h} />
        </div>
      </div>
    </figure>
  );
};

export default CoinInfoCard;
