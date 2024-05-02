import Brand from "../ui/Brand";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import routeConfig from "../../config/routeConfig";
import ThemeToggle from "./../ui/ThemeToggle";
import { authSelectors } from "../../redux/authSlice";
import { useAppSelector } from "../../redux/store";
import Avatar from "../ui/Avatar";

const HomeHeader = () => {
  const user = useAppSelector(authSelectors.authUser);

  return (
    <header>
      <nav className="px-4 lg:px-6 py-5">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <Brand />

          <div className="flex items-center space-x-4">
            <div className="rounded-full overflow-hidden">
              <ThemeToggle disableText />
            </div>

            {user ? (
              <Avatar
                avatarSize="md"
                className="mt-1 !border-blue-50"
                src={user?.photoURL ? user.photoURL : ""}
                alt={user?.displayName ? user.displayName : "user"}
              />
            ) : (
              <Link to={routeConfig.routeLinking.login.path}>
                <Button className="h-10 min-w-[6rem]">{"Login"}</Button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HomeHeader;
