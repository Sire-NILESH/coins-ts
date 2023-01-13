import React from "react";
import HeaderTitle from "./HeaderTitle";
import { CiCalendarDate } from "react-icons/ci";
import HeaderButton from "./HeaderButton";

interface IProps {
  title: string;
}

const Header: React.FC<IProps> = (props) => {
  return (
    <header className="flex items-center justify-between mb-5">
      <HeaderTitle title={props.title} />

      <div className="">
        <ul className="flex items-center gap-8 uppercase text-xs font-semibold text-quaternary">
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
      </div>
    </header>
  );
};

export default Header;
