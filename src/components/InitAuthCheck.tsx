import { Outlet } from "react-router-dom";
import useAuthUserCheck from "../hooks/useAuthUserCheck";

const InitAuthCheck = () => {
  // check initial auth user here
  useAuthUserCheck();
  return (
    <>
      <Outlet />
    </>
  );
};

export default InitAuthCheck;
