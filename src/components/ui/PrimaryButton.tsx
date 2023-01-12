import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  title: string;
  className?: string;
  to: string;
}

const PrimaryButton: React.FC<IProps> = (props) => {
  return (
    <button
      className={`${props.className} cursor-pointer transition-colors duration-300 ease-in-out text-slate-500 text-xs font-semibold rounded-full w-24 px-4 py-3 hover:bg-blue-200 bg-blue-100`}
    >
      <Link to={props.to}>{props.title}</Link>
    </button>
  );
};

export default PrimaryButton;
