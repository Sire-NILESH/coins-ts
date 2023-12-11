import { Link, useLocation } from "react-router-dom";
import routeConfig, { ILinkItemProps } from "../config/routeConfig";
import { useEffect, useState } from "react";

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
          ? "bg-secondary dark:bg-lime-600 "
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
  const location = useLocation();

  const [selected, setSelected] = useState(
    `/${location.pathname.split("/")[1]}` || "/dashboard"
  );

  useEffect(() => {
    setSelected(`/${location.pathname.split("/")[1]}` || "/dashboard");

    return () => {};
  }, [location.pathname]);

  return (
    <div className="w-[100vw] sm:w-[95vw]  fixed bottom-4 z-50 px-2 sm:px-0 lg:hidden">
      <div className="flex h-20 justify-around bg-primary shadow-lg rounded-xl border border-gray-300 dark:border-gray-700">
        {routeConfig.routesLinking.map((item, i) => {
          return (
            <BottomBarLinkItem
              id={routeConfig.routesLinking[i].id}
              key={routeConfig.routesLinking[i].id}
              selected={selected}
              setSelected={setSelected}
              to={routeConfig.routesLinking[i].pathName}
            >
              {routeConfig.icons[i]}
              <span className="mt-1 py-1 px-2 md:text-sm text-xs font-medium text-primary dark:secondary   dark:hover:text-gray-200">
                {routeConfig.routesLinking[i].name}
              </span>
            </BottomBarLinkItem>
          );
        })}
      </div>
    </div>
  );
};

export default BottomBar;
