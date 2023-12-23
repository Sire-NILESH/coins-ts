import React from "react";
import useReloadData from "../../hooks/useReloadData";
import DataFetchTime from "../DataFetchTime";
import GoBackButton from "./GoBackButton";
import HeaderTitle from "./HeaderTitle";

interface IProps {
  title: string;
  time: "local" | "state";
  hasGoBackBtn?: boolean;
}

const Header: React.FC<IProps> = (props) => {
  const reloadDataState = useReloadData();
  return (
    <header className="flex gap-4 md:px-4 shadow-md py-2 md:shadow-none flex-row items-center justify-center flex-wrap md:justify-between">
      <div className="w-full md:w-auto flex items-center justify-center space-x-4">
        {props.hasGoBackBtn ? <GoBackButton /> : null}
        <HeaderTitle title={props.title} />
      </div>

      <DataFetchTime
        onRefreshHandler={!props.hasGoBackBtn ? reloadDataState : undefined}
        time={props.time}
      />
    </header>
  );
};

export default Header;
