import { forwardRef } from "react";
import LoadingSpinner from "../ui/LoadingSpinner";
import { authSelectors } from "../../redux/authSlice";
import { useAppSelector } from "../../redux/store";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  btnName: string;
};

type Ref = HTMLButtonElement;

const AuthFormSubmitBtn = forwardRef<Ref, Props>(
  ({ btnName, type, disabled }, ref) => {
    const authLoading = useAppSelector(authSelectors.isAuthLoading);
    return (
      <button
        ref={ref}
        disabled={disabled}
        type={type}
        className={`w-full rounded-full bg-primary h-11 flex items-center justify-center space-x-3 px-6 py-3 transition hover:bg-primary/90 focus:bg-blue-600 active:bg-blue-800  ${
          disabled ? "hover:cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        {authLoading && <LoadingSpinner variant="small" />}
        <span className="text-base font-semibold text-white">{btnName}</span>
      </button>
    );
  }
);

export default AuthFormSubmitBtn;
