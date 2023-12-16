import React from "react";
import { Link, LinkProps } from "react-router-dom";

type Props = LinkProps & {
  btnName: string;
};

const LinkBtn = ({ btnName, className, to }: Props) => {
  return (
    <Link to={to} className={`inline-block w-max p-3 ${className}`}>
      <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">
        {btnName}
      </span>
    </Link>
  );
};

export default LinkBtn;
