import React, { ReactElement, ReactNode } from "react";

interface IProps {
  children: ReactElement | ReactNode;
}

const CardWrapper: React.FC<IProps> = (props) => {
  return <div className="bg-neumorphic w-full">{props.children}</div>;
};

export default CardWrapper;
