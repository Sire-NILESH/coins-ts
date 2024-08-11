import routeConfig from "../../config/routeConfig";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const ActionBtns = () => {
  return (
    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
      <Link to={routeConfig.routeLinking.register.path}>
        <Button className="animate-bounce px-4 py-2 w-40 !bg-blue-700 border-none">
          <p className="text-white text-base font-medium">Join now</p>
        </Button>
      </Link>

      <Link to={routeConfig.routeLinking.overview.path}>
        <button
          type="button"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-primary rounded-full hover:bg-secondary group"
        >
          My Dashboard
          <svg
            className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition-transform ease-in-out duration-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default ActionBtns;
