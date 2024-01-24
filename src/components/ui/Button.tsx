import React, { forwardRef } from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

type Ref = HTMLButtonElement;

const Button = forwardRef<Ref, Props>(
  ({ className, children, ...restProps }, ref) => {
    return (
      <button
        ref={ref}
        className={`${className} cursor-pointer transition-colors duration-300 ease-in-out text-secondary text-xs font-semibold rounded-full hover:bg-btnHover bg-button dark:bg-blue-700 dark:text-blue-50 hover:dark:bg-blue-600`}
        {...restProps}
      >
        {children}
      </button>
    );
  }
);

export default Button;
