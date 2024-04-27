import React from "react";
import { formatCurrency } from "../../uitls/helper";

interface IProps {
  value: number | null;
  title: string;
}

const TableRowData: React.FC<IProps> = (props) => {
  const value = formatCurrency(props.value);

  return (
    <div className="w-full grid grid-cols-2 text-card-foreground/70">
      <p className="justify-items-start font-normal text-xs">{props.title}</p>{" "}
      <p className="justify-self-end text-xs font-bold text-card-foreground/80">
        <span>$</span>
        {`${value}`}
      </p>
    </div>
  );
};

export default TableRowData;
