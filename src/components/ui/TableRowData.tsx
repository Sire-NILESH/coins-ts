import React from "react";

interface IProps {
  value: number;
  title: string;
}

const TableRowData: React.FC<IProps> = (props) => {
  const value = Number(props.value?.toFixed(4)).toLocaleString();
  // const value = numberWithCommas(props.value);

  return (
    <div className="w-full grid grid-cols-2">
      <p className="justify-items-start font-normal text-slate-500 text-xs">
        {props.title}
      </p>{" "}
      <p className="justify-self-end text-xs font-bold text-slate-600">
        <span>$</span>
        {`${value}`}
      </p>
    </div>
  );
};

export default TableRowData;
