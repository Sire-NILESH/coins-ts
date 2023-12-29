import { HTMLAttributes, forwardRef } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

type Ref = HTMLDivElement;

const Divider = forwardRef<Ref, Props>(({ className, ...restProps }, ref) => {
  return (
    <div
      ref={ref}
      className={`border-r-[1px] border-primary dark:border-gray-700 ${
        className ? className : ""
      }`}
      {...restProps}
    />
  );
});

export default Divider;
