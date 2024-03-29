import React from "react";
import { formatCurrency } from "../../uitls/helper";

interface IProps {
  value: number | null;
  title: string;
}

const TableRowData: React.FC<IProps> = (props) => {
  const value = formatCurrency(props.value);

  return (
    <div className="w-full grid grid-cols-2">
      <p className="justify-items-start font-normal text-tertiary text-xs">
        {props.title}
      </p>{" "}
      <p className="justify-self-end text-xs font-bold text-secondary">
        <span>$</span>
        {`${value}`}
      </p>
    </div>
  );
};

export default TableRowData;
