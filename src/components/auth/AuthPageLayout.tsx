import React, { forwardRef } from "react";

type Props = React.HtmlHTMLAttributes<HTMLDivElement>;

type Ref = HTMLDivElement;

const AuthPageLayout = forwardRef<Ref, Props>(({ children }, ref) => {
  return (
    <div className="m-auto xl:w-container px-12 sm:px-0 mx-auto" ref={ref}>
      {children}
    </div>
  );
});

export default AuthPageLayout;
