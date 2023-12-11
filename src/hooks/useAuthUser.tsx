import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../firebase";
import { authActions } from "../redux/authSlice";
import { useAppDispatch } from "../redux/store";

const useAuthUser = () => {
  // checking initial auth user here
  const dispatch = useAppDispatch();

  dispatch(authActions.setInitialAuthLoading(true));

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      if (currentUser) {
        dispatch(authActions.setInitialAuthUser(currentUser));
      }
      dispatch(authActions.setInitialAuthLoading(false));
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);
};

export default useAuthUser;
