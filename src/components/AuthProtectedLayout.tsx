import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/store";
import { authSelectors } from "../redux/authSlice";
import routeConfig from "../config/routeConfig";

const AuthProtectedLayout = () => {
  const user = useAppSelector(authSelectors.authUser);

  const location = useLocation();

  return (
    <>
      {user ? (
        <Outlet />
      ) : (
        <Navigate
          to={routeConfig.routeLinking.login.path}
          state={{ from: location }}
          replace
        />
      )}
    </>
  );
};

export default AuthProtectedLayout;
