import React from "react";

const HeaderTitle: React.FC<{ title: string }> = (props) => {
  return (
    <h1 className="font-semibold uppercase tracking-widest lg:tracking-[2px] md:text-lg lg:text-2xl text-primary">
      {props.title}
    </h1>
  );
};

export default HeaderTitle;
