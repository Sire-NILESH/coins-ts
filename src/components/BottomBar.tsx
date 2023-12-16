import { useState } from "react";
import { Link } from "react-router-dom";
import appIcons from "../config/appIcons";
import routeConfig, { ILinkItemProps } from "../config/routeConfig";

interface IProps {}

const BottomBarLinkItem: React.FC<ILinkItemProps> = ({
  id,
  selected,
  setSelected,
  children,
  to,
}) => {
  return (
    <Link
      id={id}
      className={`flex-1 flex m-1 flex-col items-center justify-center rounded-2xl text-primary transition-colors duration-200 ease-in-out dark:secondary   dark:hover:text-gray-200 ${
        selected === id
          ? "bg-secondary dark:bg-purple-500 "
          : "bg-transparent hover:bg-gray-300/60 dark:hover:bg-gray-700"
      }`}
      to={to}
      onClick={function (e) {
        setSelected(id);
      }}
    >
      {children}
    </Link>
  );
};

const BottomBar: React.FC<IProps> = (props) => {
  const [selected, setSelected] = useState<string>(
    routeConfig.bottombarRoutes[0].id
  );

  return (
    <div className="w-[100vw] sm:w-[95vw]  fixed bottom-4 z-50 px-2 sm:px-0 lg:hidden">
      <div className="flex h-20 justify-around bg-primary shadow-lg rounded-xl border border-gray-300 dark:border-gray-700">
        {routeConfig.bottombarRoutes.map((route) => {
          return (
            <BottomBarLinkItem
              id={route.id}
              key={route.id}
              selected={selected}
              setSelected={setSelected}
              to={route.path}
            >
              {appIcons[route.id]}
              <span className="mt-1 py-1 px-2 md:text-sm text-xs font-medium text-primary dark:secondary   dark:hover:text-gray-200">
                {route.name}
              </span>
            </BottomBarLinkItem>
          );
        })}
      </div>
    </div>
  );
};

export default BottomBar;
