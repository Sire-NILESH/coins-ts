import LoadingSpinner from "./../components/ui/LoadingSpinner";
import { useAppSelector } from "../redux/store";
import { authSelectors } from "../redux/authSlice";
import { Navigate, useLocation } from "react-router-dom";
import routeConfig from "../config/routeConfig";

const CheckingAuthPage = () => {
  const user = useAppSelector(authSelectors.authUser);
  const isAuthInitialLoading = useAppSelector(
    authSelectors.isAuthInitialLoading
  );
  const isAuthLoading = useAppSelector(authSelectors.isAuthLoading);

  const loading = isAuthInitialLoading || isAuthLoading;

  const location = useLocation();

  return (
    <>
      {loading ? (
        <div className="flex flex-col items-center space-y-6">
          <LoadingSpinner variant="regular" />
          <p className="text-lg font-semibold text-primary">
            Authenticating, please wait
          </p>
        </div>
      ) : user && !loading ? (
        //   Authenticated
        <Navigate
          to={location.state.from.pathname}
          state={{ from: location }}
          replace
        />
      ) : (
        <Navigate
          to={routeConfig.routeLinking.login.path}
          state={{ from: location }}
          replace
        />
      )}{" "}
    </>
  );
};

export default CheckingAuthPage;
