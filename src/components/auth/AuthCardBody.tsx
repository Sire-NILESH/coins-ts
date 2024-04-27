import React, { forwardRef } from "react";

type Props = React.HtmlHTMLAttributes<HTMLDivElement> & {
  formTitle: string;
};

type Ref = HTMLDivElement;

const AuthCardBody = forwardRef<Ref, Props>(({ formTitle, children }, ref) => {
  return (
    <div
      className="mt-12 rounded-3xl border-t-2 border-b-8 border-b-gray-300 border-gray-100 shadow-xl dark:shadow-none dark:border dark:border-gray-700 bg-card -mx-6 sm:-mx-10 px-4 py-8 sm:p-10"
      ref={ref}
    >
      <h3 className="text-2xl font-semibold text-card-foreground/80">
        {formTitle}
      </h3>
      {/* children goes here */}
      {children}
    </div>
  );
});

export default AuthCardBody;
