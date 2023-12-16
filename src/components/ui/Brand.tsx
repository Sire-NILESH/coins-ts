import { Link } from "react-router-dom";
import appIcons from "./../../config/appIcons";

const Brand = () => {
  return (
    <Link to="/" className="flex items-center text-primary">
      <div className="p-1 bg-purple-500 rounded-full block h-12 w-12 mr-2">
        {appIcons.react}
      </div>
      <p className="font-bold text-lg 2xl:text-3xl">
        Cryp
        <span className="text-purple-500 dark:text-purple-400">Track</span>
      </p>
    </Link>
  );
};

export default Brand;
