import { HTMLAttributes, forwardRef } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  horizonatal?: boolean;
  vertical?: boolean;
};

type Ref = HTMLDivElement;

const Divider = forwardRef<Ref, Props>(
  ({ className, horizonatal, vertical, ...restProps }, ref) => {
    return (
      <div
        ref={ref}
        className={`${
          horizonatal ? "border-b-[1px]" : vertical ? "border-r-[1px]" : ""
        } ${className ? className : ""}`}
        {...restProps}
      />
    );
  }
);

export default Divider;
