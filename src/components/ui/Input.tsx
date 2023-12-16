import { forwardRef } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  endBtnContent?: React.ReactElement;
  endBtnOnclick?: () => void;
  errMessage?: string | undefined;
};

type Ref = HTMLInputElement;

const Input = forwardRef<Ref, Props>(
  (
    {
      className,
      type,
      placeholder,
      endBtnContent,
      endBtnOnclick,
      errMessage,
      ...restProps
    },
    ref
  ) => {
    return (
      <div className={className}>
        <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
          <input
            ref={ref}
            type={type}
            {...restProps}
            placeholder={placeholder}
            className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
          />

          {endBtnContent !== undefined ? (
            <button
              type={"button"}
              onClick={endBtnOnclick}
              className="absolute right-2 -top-1 rounded-full bg-primary p-2 flex items-center justify-center"
            >
              {endBtnContent}
            </button>
          ) : null}
        </div>

        <p className="mt-1 text-red-400 text-xs font-semibold">{errMessage}</p>
      </div>
    );
  }
);

export default Input;
