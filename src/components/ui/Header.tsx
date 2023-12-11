import React from "react";
import HeaderTitle from "./HeaderTitle";
import DataFetchTime from "./DataFetchTime";
import GoBackButton from "./GoBackButton";
import { useAppDispatch } from "../../redux/store";
import { fetchTopCoins } from "../../redux/topCoinsSlice";
import { fetchExchanges } from "../../redux/exchangesSlice";
import { fetchTrending } from "../../redux/trendingCoinsSlice";
import { setDataFetchTime } from "../../redux/dataFetchTimeSlice";

interface IProps {
  title: string;
  time: "local" | "state";
  goBack?: boolean;
}

const Header: React.FC<IProps> = (props) => {
  const dispatch = useAppDispatch();

  function reloadState() {
    console.log("reloading state");
    dispatch(fetchTopCoins());
    dispatch(fetchExchanges());
    dispatch(fetchTrending());
    dispatch(setDataFetchTime(Date.now()));
  }

  return (
    <header className="flex gap-4 md:px-4 shadow-md py-2 md:shadow-none flex-row items-center justify-center flex-wrap md:justify-between">
      <div className="w-full md:w-auto flex items-center justify-center space-x-4">
        {props.goBack ? <GoBackButton /> : null}
        <HeaderTitle title={props.title} />
      </div>

      <DataFetchTime onRefreshHandler={reloadState} time={props.time} />
    </header>
  );
};

export default Header;
