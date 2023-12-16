import React, { forwardRef } from "react";

type Props = React.HtmlHTMLAttributes<HTMLDivElement> & {
  formTitle: string;
};

type Ref = HTMLDivElement;

const AuthCardBody = forwardRef<Ref, Props>(({ formTitle, children }, ref) => {
  return (
    <div
      className="mt-12 rounded-3xl border-t-2 border-b-8 border-b-gray-300 border-gray-100 shadow-xl dark:shadow-none dark:border dark:border-gray-700 bg-primary dark:bg-primary -mx-6 sm:-mx-10 p-8 sm:p-10"
      ref={ref}
    >
      <h3 className="text-2xl font-semibold text-text-primary dark:text-white">
        {formTitle}
      </h3>
      {/* children goes here */}
      {children}
    </div>
  );
});

export default AuthCardBody;
