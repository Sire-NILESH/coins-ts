import { Link, useLocation } from "react-router-dom";
import appIcons from "../config/appIcons";
import routeConfig, { ILinkItemProps } from "../config/routeConfig";
import UserAvatarPopover from "./UserAvatarPopover";
import Divider from "./ui/Divider";

const BottomBarLinkItem: React.FC<ILinkItemProps> = ({
  id,
  selected,
  children,
  to,
}) => {
  return (
    <Link
      id={id}
      className={`flex-1 flex m-1 flex-col items-center justify-center rounded-2xl transition-colors duration-200 ease-in-out text-white ${
        selected === id
          ? "bg-blue-50 !text-blue-900"
          : "bg-transparent hover:bg-blue-300/60"
      }`}
      to={to}
    >
      {children}
    </Link>
  );
};

const BottomBar = () => {
  const path = useLocation();

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 px-2 lg:hidden">
      <div className="flex h-20 justify-around bg-brandshade shadow-lg rounded-xl dark:border-gray-700">
        {routeConfig.bottombarRoutes.map((route) => {
          return (
            <BottomBarLinkItem
              id={route.id}
              key={route.id}
              selected={path.pathname.split("/")[2]}
              to={route.path}
            >
              {appIcons[route.id]}
              <span className="mt-1 py-1 px-2 md:text-sm text-xs font-medium line-clamp-1">
                {route.name}
              </span>
            </BottomBarLinkItem>
          );
        })}

        <Divider vertical className="!border-blue-700 dark:border-blue-700" />
        <UserAvatarPopover />
      </div>
    </div>
  );
};

export default BottomBar;
