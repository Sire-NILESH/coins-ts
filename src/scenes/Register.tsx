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
import { authActions, authSelectors } from "../redux/authSlice";
import { modalActions } from "../redux/modalSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import handleAuthErr from "../uitls/handleAuthErr";
import { registerAuthFormSchema } from "../uitls/validationSchemas";
import { registerAccount } from "./../redux/authSlice";
import routeConfig from "../config/routeConfig";

// zodResolver
type TRegisterForm = z.infer<typeof registerAuthFormSchema>;

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TRegisterForm>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(registerAuthFormSchema),
  });

  const authError = useAppSelector(authSelectors.authError);
  const authLoading = useAppSelector(authSelectors.isAuthLoading);

  const dispatch = useAppDispatch();

  const navigation = useNavigate();

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  function toggleShowPassword() {
    setShowPassword((prev) => {
      return { ...prev, password: !prev.password };
    });
  }

  function toggleShowPasswordConfirm() {
    setShowPassword((prev) => {
      return { ...prev, confirmPassword: !prev.confirmPassword };
    });
  }

  const onSubmit: SubmitHandler<TRegisterForm> = async ({
    email,
    userName,
    password,
  }) => {
    const res = await dispatch(registerAccount({ email, userName, password }));
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
      <AuthPageHeader headerSubtitle="Join now in few quick and easy steps." />

      <AuthCard>
        <AuthCardBody formTitle="Create your new account">
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

            <Input
              type="text"
              placeholder="Your user name*"
              errMessage={errors.userName?.message}
              {...register("userName")}
            />

            <Input
              className="w-full"
              type={showPassword.password ? "text" : "password"}
              placeholder="Your password*"
              errMessage={errors.password?.message}
              endBtnContent={
                showPassword.password ? (
                  <GoEyeClosed className="h-4 w-4" />
                ) : (
                  <GoEye className="h-4 w-4" />
                )
              }
              endBtnOnclick={toggleShowPassword}
              {...register("password")}
            />

            <Input
              className="w-full"
              type={showPassword.confirmPassword ? "text" : "password"}
              placeholder="Confirm password*"
              errMessage={errors.confirmPassword?.message}
              endBtnContent={
                showPassword.confirmPassword ? (
                  <GoEyeClosed className="h-4 w-4" />
                ) : (
                  <GoEye className="h-4 w-4" />
                )
              }
              endBtnOnclick={toggleShowPasswordConfirm}
              {...register("confirmPassword")}
            />

            <AuthFormSubmitBtn
              type="submit"
              btnName="Register"
              disabled={authLoading}
            />

            <LinkBtn
              className="mt-2 -ml-3"
              btnName="Already have an account ?"
              to={routeConfig.routeLinking.login.path}
            />
          </form>
        </AuthCardBody>

        <AuthPageFooter />
      </AuthCard>
    </AuthPageLayout>
  );
};

export default Register;
