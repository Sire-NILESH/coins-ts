import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import AuthCard from "../components/auth/AuthCard";
import AuthCardBody from "../components/auth/AuthCardBody";
import AuthFormSubmitBtn from "../components/auth/AuthFormSubmitBtn";
import AuthPageFooter from "../components/auth/AuthPageFooter";
import AuthPageHeader from "../components/auth/AuthPageHeader";
import AuthPageLayout from "../components/auth/AuthPageLayout";
import SocialLogin from "../components/auth/SocialLogin";
import Input from "../components/ui/Input";
import LinkBtn from "../components/ui/LinkBtn";
import { authActions, authSelectors, login } from "../redux/authSlice";
import { modalActions } from "../redux/modalSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import handleAuthErr from "../uitls/handleAuthErr";
import { LoginAuthSchema } from "../uitls/validationSchemas";
import routeConfig from "../config/routeConfig";

// zodResolver
type TLogin = z.infer<typeof LoginAuthSchema>;

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
    resolver: zodResolver(LoginAuthSchema),
  });

  const authError = useAppSelector(authSelectors.authError);
  const authLoading = useAppSelector(authSelectors.isAuthLoading);

  const dispatch = useAppDispatch();

  const navigation = useNavigate();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  function togglePassword() {
    setShowPassword((prev) => !prev);
  }

  const onSubmit: SubmitHandler<TLogin> = async ({ email, password }) => {
    const res = await dispatch(login({ email, password }));
    if (res.meta.requestStatus === "fulfilled") {
      reset();
      navigation("/", { replace: true });
    }
  };

  // All modal related handlers below
  function onModalClose() {
    // reset();
    dispatch(authActions.resetAuthErrors());
    dispatch(modalActions.resetModalHandler());
  }

  function showModalWithError() {
    dispatch(
      modalActions.modalHandler({
        isModalOpen: true,
        modalContent: handleAuthErr(authError),
        onCloseModalHandler: onModalClose,
      })
    );
  }

  // Show modal on auth error
  useEffect(() => {
    if (!!authError) {
      showModalWithError();
    }
    // eslint-disable-next-line
  }, [authError]);

  return (
    <AuthPageLayout>
      <AuthPageHeader headerSubtitle="Unlock your full potential by logging in to your account." />

      <AuthCard>
        <AuthCardBody formTitle="Login to your account">
          <SocialLogin />

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 space-y-8 dark:text-white"
          >
            <Input
              type="email"
              placeholder="Your email*"
              errMessage={errors.email?.message}
              {...register("email")}
            />

            <div className="flex flex-col items-end">
              <Input
                className="w-full"
                type={showPassword ? "text" : "password"}
                placeholder="Your password*"
                errMessage={errors.password?.message}
                endBtnContent={
                  showPassword ? (
                    <GoEyeClosed className="h-4 w-4" />
                  ) : (
                    <GoEye className="h-4 w-4" />
                  )
                }
                endBtnOnclick={togglePassword}
                {...register("password")}
              />

              <LinkBtn to="#" className="-mr-3" btnName="Forgot password ?" />
            </div>

            <AuthFormSubmitBtn
              type="submit"
              btnName="Login"
              disabled={authLoading}
            />

            <LinkBtn
              className="mt-2 -ml-3"
              btnName="Create new account"
              to={routeConfig.routeLinking.register.path}
            />
          </form>
        </AuthCardBody>

        <AuthPageFooter />
      </AuthCard>
    </AuthPageLayout>
  );
};

export default Login;
