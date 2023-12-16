import React, { forwardRef } from "react";

type Props = React.HtmlHTMLAttributes<HTMLDivElement>;

type Ref = HTMLDivElement;

const AuthCard = forwardRef<Ref, Props>(({ children }, ref) => {
  return (
    <div className="mx-auto sm:w-max" ref={ref}>
      <div className="mx-auto">
        {/* children goes here */}
        {children}
      </div>
    </div>
  );
});

export default AuthCard;
