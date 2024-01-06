import React from "react";

const HeaderTitle: React.FC<{ title: string }> = (props) => {
  return (
    <h1 className="font-semibold uppercase tracking-widest lg:tracking-[2px] md:text-lg lg:text-2xl bg-gradient-to-r from-indigo-500 to-blue-300 bg-clip-text text-transparent">
      {props.title}
    </h1>
  );
};

export default HeaderTitle;
