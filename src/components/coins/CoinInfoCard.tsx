import React from "react";
import { Link } from "react-router-dom";
import { Coin } from "../../../typing";
import appIcons from "../../config/appIcons";
import { formatCurrency } from "../../uitls/helper";
import AppSparklines from "../AppSparklines";
import TableRowData from "../ui/TableRowData";
import CoinImage from "./CoinImage";

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

interface IProps {
  graphColor: "blue" | "green" | "red";
  data: Coin;
  onClickNavigateTo: string;
}

const CoinInfoCard: React.FC<IProps> = (props) => {
  return (
    <Link to={props.onClickNavigateTo} className="place-self-center">
      <figure className=" min-w-[19rem] sm:w-[19rem] md:w-[20rem] px-4 flex gap-1 flex-col py-4 hover:cursor-pointer">
        {/* TITLE */}
        <div className="flex items-center justify-between">
          <div className="flex items-center font-semibold text-base gap-1 ">
            <span className="border bg-slate-900 dark:bg-slate-300 text-textLightest border-slate-700 flex items-center justify-center rounded-full h-6 w-6">
              {props.data.market_cap_rank}
            </span>{" "}
            &nbsp;
            <CoinImage image={props.data.image} name={props.data.name} />
            <p className="text-secondary">{props.data.name}</p>
          </div>
          <p className="font-bold text-normal text-primary">{`$${
            props.data.current_price < 10
              ? props.data.current_price
              : formatCurrency(props.data.current_price)
          }`}</p>
        </div>

        {/* GRAPH/SPARKLINE */}
        <div className="flex-[2] my-2 p-2 rounded-3xl border dark:border-gray-800">
          <div className="py-4 w-full">
            <AppSparklines data={props.data.sparkline_in_7d.price} />
            <p className="mt-4 text-xs text-center text-secondary flex items-center gap-2 justify-center">
              {appIcons.calendar}
              {"In past 7 days"}
            </p>
          </div>
        </div>

        {/* RELATED DATA */}
        <div className="flex-1 space-y-2 mt-4">
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

        <div className="mt-10 rounded-3xl bg-fuchsia-100 dark:bg-purple-500/20 py-3 px-4">
          <div className="flex items-center mb-2 gap-2">
            <div
              className={`w-3 rounded-full h-3 ${colorCode(
                props.data.market_cap_change_percentage_24h
              )}`}
            />
            <p className="font-bold text-sm text-tertiary">Past 24 Hours</p>
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
    </Link>
  );
};

export default CoinInfoCard;
