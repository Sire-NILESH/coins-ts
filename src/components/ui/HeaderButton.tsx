import React from "react";
import ThemeToggle from "./ThemeToggle";
import Button from "./Button";

interface IProps {
  className?: string;
}

const HeaderButton: React.FC<IProps> = (props) => {
  return (
    <Button className="min-w-[3rem] md:min-w-[6rem]">
      <ThemeToggle />
    </Button>
  );
};

export default HeaderButton;
