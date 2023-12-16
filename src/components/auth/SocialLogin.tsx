import { FaGithub } from "react-icons/fa";
import { authSelectors, loginWithGoogle } from "../../redux/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const dispatch = useAppDispatch();
  const authLoading = useAppSelector(authSelectors.isAuthLoading);

  const navigation = useNavigate();

  const googleLoginHandler = async () => {
    const res = await dispatch(loginWithGoogle());
    if (res.meta.requestStatus === "fulfilled") {
      navigation("/", { replace: true });
    }
  };

  return (
    <div className="mt-12 flex flex-wrap sm:grid gap-6 grid-cols-2">
      <button
        onClick={googleLoginHandler}
        disabled={authLoading}
        className={`w-full h-11 rounded-full border border-gray-300/75 bg-white px-6 transition active:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700 ${
          authLoading ? "hover:cursor-not-allowed" : ""
        }`}
      >
        <div className="w-max mx-auto flex items-center justify-center space-x-4">
          <img src="images/google.svg" className="w-5" alt="" />
          <span className="block w-max text-sm font-semibold tracking-wide text-cyan-700 dark:text-white">
            With Google
          </span>
        </div>
      </button>

      <button
        disabled
        className="hover:cursor-not-allowed w-full h-11 rounded-full bg-gray-900 px-6 transition hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-600 dark:bg-gray-700 dark:border dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700"
      >
        <div className="w-max mx-auto flex items-center justify-center space-x-4 text-white">
          <FaGithub className="w-5 h-5" />
          <span className="block w-max text-sm font-semibold tracking-wide text-white">
            With Github
          </span>
        </div>
      </button>
    </div>
  );
};

export default SocialLogin;
