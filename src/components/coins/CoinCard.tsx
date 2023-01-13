import React from "react";
import TableRowData from "./../ui/TableRowData";
import CoinImage from "./CoinImage";

interface IProps {
  data: {
    name: string;
    image: string;
    rank: number;
    OverAllchange: number;
    currentPrice: number;
    total_supply: number | null;
    marketCap: number;
  };
}

/* <div className="py-4 px-4 w-80 bg-primary h-28 rounded-xl"></div> */

const CoinCard: React.FC<IProps> = (props) => {
  return (
    <div className="py-4 px-1 w-80 h-28 cursor-pointer">
      <header className="flex items-center justify-between mb-1 w-full">
        <div className="flex justify-between w-full">
          <div className="flex">
            <CoinImage image={props.data.image} name={props.data.name} />
            <p className="ml-2 text-secondary text-sm font-semibold">
              {props.data.name}
            </p>
          </div>
          <span className="border border-primary text-tertiary flex items-center justify-center rounded-full h-6 w-6 mr-1">
            {props.data.rank}
          </span>{" "}
        </div>
        {/* <div
          className={`w-3 justify-self-end rounded-full h-3 ${colorCode(
            props.data.OverAllchange
          )}`}
        /> */}
      </header>
      <div className="mx-2 mt-2">
        <TableRowData title={"Price"} value={props.data.currentPrice} />
        {props.data.total_supply ? (
          <TableRowData
            title={"Total supply"}
            value={props.data.total_supply}
          />
        ) : null}
        <TableRowData title={"Market cap"} value={props.data.marketCap} />
      </div>
      <div></div>
    </div>
  );
};

export default CoinCard;
