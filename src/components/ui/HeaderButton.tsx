import React from "react";

interface IProps {
  title: string;
  className?: string;
}

const HeaderButton: React.FC<IProps> = (props) => {
  return (
    <button
      className={`${props.className} cursor-pointer transition-colors duration-300 ease-in-out text-slate-500 text-xs font-semibold rounded-full w-24 px-4 py-3 hover:bg-blue-200 bg-blue-100`}
    >
      {props.title}
    </button>
  );
};

export default HeaderButton;
