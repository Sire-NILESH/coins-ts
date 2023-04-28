import React from "react";
import HeaderTitle from "./HeaderTitle";
import DataFetchTime from "./DataFetchTime";
import GoBackButton from "./GoBackButton";

interface IProps {
  title: string;
  time: "local" | "state";
  goBack?: boolean;
}

const Header: React.FC<IProps> = (props) => {
  return (
    <header className="flex flex-col gap-y-4 md:px-4 shadow-md py-2 md:shadow-none md:flex-row items-center justify-center md:justify-between mb-5">
      <div className="w-full md:w-auto flex items-center space-x-4">
        {props.goBack ? <GoBackButton /> : null}
        <HeaderTitle title={props.title} />
      </div>

      {/* <div className="">
        <ul className="flex items-center gap-6 sm:gap-8 uppercase text-xs font-semibold text-quaternary">
          <li className="font-bold text-secondary">D</li>
          <li className="cursor-pointer">W</li>
          <li className="cursor-pointer">M</li>
          <li className="cursor-pointer">Y</li>
          <li className="cursor-pointer">ALL</li>
          <li>
            <CiCalendarDate className="h-5 w-5 text-secondary" />
          </li>
          <li>
            <HeaderButton />
          </li>
        </ul>
      </div> */}

      <DataFetchTime time={props.time} />
    </header>
  );
};

export default Header;
