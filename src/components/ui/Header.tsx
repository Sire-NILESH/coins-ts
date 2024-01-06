import React from "react";
import useReloadData from "../../hooks/useReloadData";
import DataFetchTime from "../DataFetchTime";
import GoBackButton from "./GoBackButton";
import HeaderTitle from "./HeaderTitle";
import HeaderButton from "./HeaderButton";
import Brand from "./Brand";

interface IProps {
  title: string;
  time: "local" | "state";
  hasGoBackBtn?: boolean;
}

const Header: React.FC<IProps> = (props) => {
  const reloadDataState = useReloadData();
  return (
    <header className="flex gap-4 md:px-4 border-b border-gray-300 dark:border-gray-700 pt-2 pb-4 md:pb-2 sm:border-none flex-row items-center justify-between flex-wrap md:justify-between">
      <div className="md:w-auto flex items-center space-x-2">
        {props.hasGoBackBtn ? <GoBackButton /> : null}

        <div className="block lg:hidden">
          <Brand />
        </div>

        <div className="hidden lg:block">
          <HeaderTitle title={props.title} />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <DataFetchTime
          onRefreshHandler={!props.hasGoBackBtn ? reloadDataState : undefined}
          time={props.time}
        />

        {/* <HeaderButton /> */}
      </div>
    </header>
  );
};

export default Header;
