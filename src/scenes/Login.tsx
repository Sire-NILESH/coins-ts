import { useState } from "react";
import Brand from "../components/ui/Brand";
import ThemeToggle from "../components/ui/ThemeToggle";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { z } from "zod";
import { loginAuthSchema } from "../uitls/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { authSelectors, login } from "../redux/authSlice";
import { Link } from "react-router-dom";

// zodResolver
type TLogin = z.infer<typeof loginAuthSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TLogin>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginAuthSchema),
  });

  const authError = useAppSelector(authSelectors.authError);
  const authLoading = useAppSelector(authSelectors.isAuthLoading);
  const authUser = useAppSelector(authSelectors.authUser);
  const dispatch = useAppDispatch();

  console.log({ authError, authLoading, authUser });
  console.log(errors);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  function togglePassword() {
    setShowPassword((prev) => !prev);
  }

  const onSubmit: SubmitHandler<TLogin> = async ({ email, password }) => {
    await dispatch(login({ email, password }));
    reset();
  };

  return (
    <div className="font-poppins flex items-center">
      <div className="m-auto xl:w-container px-12 sm:px-0 mx-auto">
        <div className="space-y-2 flex flex-col items-center justify-center">
          <div className="mt-10">
            <Brand />
          </div>
          <p className="font-normal text-sm text-tertiary">
            Unlock your full potential by logging in to your account.
          </p>
        </div>

        <div className="mx-auto sm:w-max">
          <div className="mx-auto">
            <div className="mt-12 rounded-3xl border-t-2 border-b-8 border-b-gray-300 border-gray-100 shadow-xl dark:shadow-none dark:border dark:border-gray-700 bg-primary dark:bg-primary -mx-6 sm:-mx-10 p-8 sm:p-10">
              <h3 className="text-2xl font-semibold text-text-primary dark:text-white">
                Login to your account
              </h3>
              <div className="mt-12 flex flex-wrap sm:grid gap-6 grid-cols-2">
                <button className="w-full h-11 rounded-full border border-gray-300/75 bg-white px-6 transition active:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700">
                  <div className="w-max mx-auto flex items-center justify-center space-x-4">
                    <img src="images/google.svg" className="w-5" alt="" />
                    <span className="block w-max text-sm font-semibold tracking-wide text-cyan-700 dark:text-white">
                      With Google
                    </span>
                  </div>
                </button>
                <button
                  disabled
                  className="w-full h-11 rounded-full bg-gray-900 px-6 transition hover:bg-gray-800 focus:bg-gray-700 active:bg-gray-600 dark:bg-gray-700 dark:border dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700"
                >
                  <div className="w-max mx-auto flex items-center justify-center space-x-4 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-5"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    <span className="block w-max text-sm font-semibold tracking-wide text-white">
                      With Github
                    </span>
                  </div>
                </button>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-10 space-y-8 dark:text-white"
              >
                <div>
                  <div>
                    <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                      <input
                        type="email"
                        {...register("email")}
                        placeholder="Your email*"
                        className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                      />
                    </div>
                  </div>

                  <p className="mt-1 text-red-400 text-xs font-semibold">
                    {errors.email?.message}
                  </p>
                </div>

                <div>
                  <div className="flex flex-col">
                    <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Your password*"
                        {...register("password")}
                        className="relative w-full bg-transparent pb-3 pr-14 border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                      />

                      <button
                        type={"button"}
                        onClick={togglePassword}
                        className="absolute right-2 -top-1 rounded-full bg-primary p-2 flex items-center justify-center"
                      >
                        {showPassword ? (
                          <GoEyeClosed className="h-4 w-4" />
                        ) : (
                          <GoEye className="h-4 w-4" />
                        )}
                      </button>
                    </div>

                    <p className="mt-1 text-red-400 text-xs font-semibold">
                      {errors.password?.message}
                    </p>

                    <button type="reset" className="ml-auto -mr-3 w-max p-3">
                      <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">
                        Forgot password ?
                      </span>
                    </button>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={authLoading}
                    className={`w-full rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800  ${
                      authLoading
                        ? "hover:cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                  >
                    <span className="text-base font-semibold text-white dark:text-gray-900">
                      Login
                    </span>
                  </button>
                  <Link
                    to={"/register"}
                    className="inline-block mt-2 -ml-3 w-max p-3"
                  >
                    <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">
                      Create new account
                    </span>
                  </Link>
                </div>
              </form>
            </div>
            <div className="border-t mt-12 text-gray-500 dark:border-gray-800">
              <div className="space-x-4 text-center">
                <span>&copy; Sire</span>
                <a
                  href="/login"
                  className="text-sm hover:text-sky-900 dark:hover:text-gray-300"
                >
                  Contact
                </a>
                <a
                  href="/login"
                  className="text-sm hover:text-sky-900 dark:hover:text-gray-300"
                >
                  Privacy & Terms
                </a>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
