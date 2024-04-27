import { Link } from "react-router-dom";
import appIcons from "./../../config/appIcons";

type Props = {
  isOnColouredBg?: boolean;
};

const Brand = ({ isOnColouredBg }: Props) => {
  return (
    <Link to="/" className="flex items-center text-white">
      <div className="p-1 bg-blue-600 rounded-full block h-10 w-10 2xl:h-12 2xl:w-12 mr-2">
        {appIcons.react}
      </div>
      <p
        className={`font-bold text-lg 2xl:text-3xl ${
          isOnColouredBg ? "text-white" : "text-foreground"
        }`}
      >
        Cryp
        <span
          className={`dark:text-blue-500 ${
            isOnColouredBg ? "text-blue-500" : "text-blue-600"
          }`}
        >
          Track
        </span>
      </p>
    </Link>
  );
};

export default Brand;
