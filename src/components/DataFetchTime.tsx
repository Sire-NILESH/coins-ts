import React from "react";
import { useAppSelector } from "../redux/store";
import HeaderButton from "./ui/HeaderButton";
import { selectExchnagesIsLoading } from "../redux/exchangesSlice";
import { selectTopCoinsIsLoading } from "../redux/topCoinsSlice";
import { selectTrendingCoinsIsLoading } from "../redux/trendingCoinsSlice";
import appIcons from "../config/appIcons";

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

  const exchangesIsLoading = useAppSelector(selectExchnagesIsLoading);
  const topCoinsIsLoading = useAppSelector(selectTopCoinsIsLoading);
  const trendingCoinsIsLoading = useAppSelector(selectTrendingCoinsIsLoading);

  const overallLoading =
    exchangesIsLoading || trendingCoinsIsLoading || topCoinsIsLoading;

  const isReloadType = props.onRefreshHandler !== undefined;

  return (
    <div
      className={`flex items-center justify-center space-x-2 xl:space-x-8 ${
        !isReloadType ? "hover:cursor-default" : "hover:cursor-pointer"
      }`}
    >
      <div
        onClick={() => {
          props.onRefreshHandler && props.onRefreshHandler();
        }}
        className={"flex space-x-2 items-center"}
      >
        {isReloadType ? (
          <appIcons.Refresh
            className={`h-5 w-5 font-bold mr-1 ${
              overallLoading ? " animate-spin" : ""
            }`}
          />
        ) : null}
        <p className="hidden xl:block text-sm lg:text-base font-normal text-tertiary">
          {"As of "}
        </p>
        <p className="hidden sm:block text-sm lg:text-base font-normal text-tertiary">
          {`${currentTime.toDateString()}, `}
        </p>
        <p className="hidden sm:block text-sm lg:text-base font-semibold text-secondary">
          {currentTime.toLocaleTimeString()}
        </p>
      </div>

      <HeaderButton />
    </div>
  );
};

export default DataFetchTime;
