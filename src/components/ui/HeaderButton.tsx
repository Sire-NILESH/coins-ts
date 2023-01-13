import React from "react";
import ThemeToggle from "./ThemeToggle";
import Button from "./Button";

interface IProps {
  className?: string;
}
// hover:bg-blue-200 bg-secondary
const HeaderButton: React.FC<IProps> = (props) => {
  return (
    <Button>
      <ThemeToggle />
    </Button>
  );
};

export default HeaderButton;
