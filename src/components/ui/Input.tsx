import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  errMessage?: string | undefined;
};

const Input = ({ type, placeholder, errMessage, ...restProps }: Props) => {
  return (
    <div>
      <div>
        <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
          <input
            type={type}
            // {...register("email")}
            {...restProps}
            placeholder={placeholder}
            className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
          />
        </div>
      </div>

      <p className="mt-1 text-red-400 text-xs font-semibold">{errMessage}</p>
    </div>
  );
};

export default Input;
