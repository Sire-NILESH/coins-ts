import React from "react";
import { useAppSelector } from "../../redux/store";
import HeaderButton from "./HeaderButton";
import { TfiReload } from "react-icons/tfi";

interface IProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  time: "local" | "state";
  onRefreshHandler?: () => void;
}

const DataFetchTime: React.FC<IProps> = (props) => {
  const { time } = useAppSelector((state) => state.dataFetchTime);
  const currentTime =
    props.time === "local" ? new Date(Date.now()) : new Date(time);

  return (
    <div className="flex items-center justify-center space-x-2 md:space-x-8 hover:cursor-pointer">
      <button
        type="button"
        onClick={() => {
          props.onRefreshHandler && props.onRefreshHandler();
        }}
        className="flex space-x-2 items-center"
      >
        <TfiReload className="text-secondary" />
        <p className="text-sm md:text-base font-normal text-tertiary">
          {`As of ${currentTime.toDateString()}, `}
        </p>
        <p className="text-sm md:text-base font-semibold text-secondary">
          {currentTime.toLocaleTimeString()}
        </p>
      </button>
      <HeaderButton />
    </div>
  );
};

export default DataFetchTime;
