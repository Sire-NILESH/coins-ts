import React from "react";
import { useAppSelector } from "../../redux/store";
import HeaderButton from "./HeaderButton";

interface IProps {
  time: "local" | "state";
}

const DataFetchTime: React.FC<IProps> = (props) => {
  const { time } = useAppSelector((state) => state.dataFetchTime);
  const currentTime =
    props.time === "local" ? new Date(Date.now()) : new Date(time);

  return (
    <div className="flex items-center justify-center space-x-8">
      <div className="flex space-x-2">
        <p className="text-base font-normal text-tertiary">
          As of {currentTime.toDateString()},{" "}
        </p>
        <p className="font-semibold text-secondary">
          {currentTime.toLocaleTimeString()}
        </p>
      </div>
      <HeaderButton />
    </div>
  );
};

export default DataFetchTime;
