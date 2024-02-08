import Brand from "../ui/Brand";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import routeConfig from "../../config/routeConfig";
import ThemeToggle from "./../ui/ThemeToggle";

const HomeHeader = () => {
  return (
    <header>
      <nav className="bg-primary dark:bg-slate-900 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Brand />

          <div className="flex items-center space-x-4">
            <ThemeToggle disableText />

            <Link to={routeConfig.routeLinking.login.path}>
              <Button className="h-10 min-w-[6rem]">{"Login"}</Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HomeHeader;
