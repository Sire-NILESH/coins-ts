import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DataFetchTime from "../DataTimeAndReload";
import routeConfig from "../../config/routeConfig";

const ListItem: React.FC<{
  title: string;
  selected: boolean;
  to: string;
  key: number;
}> = (props) => {
  return (
    <Link
      to={`${props.to}`}
      className={`${
        props.selected
          ? "bg-blue-700 !text-white border-blue-700"
          : "border-blue-200 dark:border-blue-900"
      } flex  border items-center justify-center gap-2 max-w-[7rem] rounded-full cursor-pointer px-3 py-2 text-card-foreground/80 hover:bg-blue-600 hover:border-blue-600 hover:text-white dark:hover:border-blue-600 transition-all duration-300 ease-in-out`}
    >
      {props.title}
    </Link>
  );
};

type SelectType = "Top Coins" | "Trending" | "Exchanges";

const Tabs = () => {
  const location = useLocation();
  const currentPath = location.pathname.slice(
    location.pathname.lastIndexOf("/") + 1
  );
  const tabs = [
    { title: "Top Coins", to: routeConfig.routeLinking.topCoins.pathName },
    { title: "Trending", to: routeConfig.routeLinking.trending.pathName },
    { title: "Exchanges", to: routeConfig.routeLinking.exchanges.pathName },
  ];

  const [selected, setSelected] = useState<SelectType>(
    (tabs.filter((item) => {
      return currentPath === item.to;
    })[0]?.title as SelectType) || "Top Coins"
  );

  return (
    <div className="space-y-5 mb-10 border-b border-gray-300 dark:border-gray-700 sm:border-none">
      <div className="flex flex-row flex-wrap gap-4 py-2 justify-center items-center lg:justify-between overflow-hidden rounded-xl ">
        <ul className="flex items-center gap-5 text-sm font-medium">
          {tabs.map((item, i) => (
            <li
              key={item.title}
              onClick={() =>
                setSelected(
                  item.title as "Top Coins" | "Trending" | "Exchanges"
                )
              }
            >
              <ListItem
                key={i}
                selected={selected === item.title ? true : false}
                title={item.title}
                to={item.to}
              />
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <DataFetchTime />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
