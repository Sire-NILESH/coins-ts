import React from "react";
import GoBackButton from "./GoBackButton";
import HeaderTitle from "./HeaderTitle";
import Brand from "./Brand";
import DataTimeAndReload from "../DataTimeAndReload";

interface IProps {
  title: string;
  time: "local" | "state";
  hasGoBackBtn?: boolean;
}

const Header: React.FC<IProps> = (props) => {
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

      <DataTimeAndReload />
    </header>
  );
};

export default Header;
