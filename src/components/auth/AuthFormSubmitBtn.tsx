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
        className={`w-full rounded-full bg-purple-500 h-11 flex items-center justify-center space-x-3 px-6 py-3 transition hover:bg-purple-600 focus:bg-purple-600 active:bg-purple-800  ${
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
