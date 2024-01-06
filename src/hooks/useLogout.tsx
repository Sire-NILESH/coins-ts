import { logout } from "../redux/authSlice";
import { useAppDispatch } from "../redux/store";

const useLogout = () => {
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return { logoutHandler };
};

export default useLogout;
