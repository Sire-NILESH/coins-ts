import React from "react";
import ThemeToggle from "./ThemeToggle";
import Button from "./Button";

interface IProps {
  className?: string;
}
// hover:bg-blue-200 bg-secondary
const HeaderButton: React.FC<IProps> = (props) => {
  return (
    <Button className="min-w-[3rem] md:min-w-[6rem]">
      <ThemeToggle />
    </Button>
  );
};

export default HeaderButton;
