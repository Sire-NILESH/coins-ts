import React, { forwardRef } from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

type Ref = HTMLButtonElement;

const Button = forwardRef<Ref, Props>(
  ({ className, children, ...restProps }, ref) => {
    return (
      <button
        ref={ref}
        className={`${className} border border-border cursor-pointer transition-colors duration-300 ease-in-out text-foreground text-xs font-semibold rounded-full hover:bg-secondary bg-button dark:bg-brandshade dark:text-blue-50 hover:dark:bg-primary/70`}
        {...restProps}
      >
        {children}
      </button>
    );
  }
);

export default Button;
