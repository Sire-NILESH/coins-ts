import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
          ? "bg-blue-600 text-white border-blue-600"
          : "border-blue-200"
      } flex  border items-center justify-center gap-2 max-w-[7rem] rounded-full cursor-pointer px-3 py-2 text-secondary hover:bg-blue-500 hover:text-white dark:hover:border-blue-500 transition-all duration-300 ease-in-out`}
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
    { title: "Top Coins", to: "top_coins" },
    { title: "Trending", to: "trending" },
    { title: "Exchanges", to: "exchanges" },
  ];

  const [selected, setSelected] = useState<SelectType>(
    (tabs.filter((item) => {
      return currentPath === item.to;
    })[0]?.title as SelectType) || "Top Coins"
  );
  return (
    <div className="space-y-5 mb-10">
      <div className="overflow-hidden rounded-xl ">
        <ul className="flex items-center gap-5 text-sm font-medium">
          {tabs.map((item, i) => (
            <li
              className=""
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
      </div>
    </div>
  );
};

export default Tabs;
