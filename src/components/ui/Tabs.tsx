import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ListItem: React.FC<{
  title: string;
  selected: boolean;
  to: string;
  key: number;
}> = (props) => {
  return (
    <li className="flex-1">
      <Link
        to={`${props.to}`}
        className={`${
          props.selected ? "bg-blue-600 text-white " : ""
        } flex border-blue-200 border items-center justify-center gap-2 max-w-[10rem] mx-auto rounded-full cursor-pointer px-3 py-2 text-slate-600 hover:shadow hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out`}
      >
        {props.title}
      </Link>
    </li>
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
      <div className="overflow-hidden rounded-xl border border-gray-100 bg-blue-50 p-1">
        <ul className="flex items-center gap-2 text-sm font-medium justify-center">
          {tabs.map((item, i) => (
            <li
              className="flex-1"
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
