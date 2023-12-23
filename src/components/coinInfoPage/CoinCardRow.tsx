import { formatCurrency } from "../../uitls/helper";

type IPropsRow = {
  title: string;
  value: number | string;
  prepend?: string;
  appendString?: string;
  xs?: boolean;
};

const CoinCardRow = (props: IPropsRow) => {
  return (
    <div className="flex justify-between">
      <span
        className={`${
          props.xs ? "text-xs" : "text-sm"
        } font-normal text-secondary mr-10`}
      >
        {props.title}
      </span>
      <span
        className={`${props.xs ? "text-xs" : "text-sm"} font-semibold  ${
          typeof props.value === "number" && props.value >= 0
            ? "text-green-600"
            : "text-red-500"
        }`}
      >
        {typeof props.value === "number"
          ? `${props.prepend ? props.prepend : ""}${formatCurrency(
              props.value
            )} ${props.appendString !== undefined ? props.appendString : ""}`
          : props.value
          ? props.value
          : "--"}
      </span>
    </div>
  );
};

export default CoinCardRow;
