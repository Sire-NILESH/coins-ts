import React, { forwardRef } from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

type Ref = HTMLButtonElement;

const Button: React.FC<Props> = forwardRef<Ref, Props>(
  ({ className, children, ...restProps }, ref) => {
    return (
      <button
        ref={ref}
        className={`${className} cursor-pointer transition-colors duration-300 ease-in-out text-tertiary text-xs font-semibold rounded-full w-24 hover:bg-btnHover bg-button dark:bg-purple-500 dark:text-purple-50 hover:dark:bg-purple-400`}
        {...restProps}
      >
        {children}
      </button>
    );
  }
);

export default Button;
