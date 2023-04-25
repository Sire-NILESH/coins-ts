import React from "react";

interface IProps {
  className?: string;
  children: React.ReactNode;
}
// hover:bg-blue-200 bg-secondary
// bg-gradient-to-tr from-amber-500 to-fuchsia-500
const Button: React.FC<IProps> = (props) => {
  return (
    <button
      className={`${props.className} cursor-pointer transition-colors duration-300 ease-in-out text-tertiary text-xs font-semibold rounded-full w-24 hover:bg-btnHover bg-button dark:bg-purple-500 dark:text-purple-50 hover:dark:bg-purple-400`}
    >
      {props.children}
    </button>
  );
};

export default Button;
