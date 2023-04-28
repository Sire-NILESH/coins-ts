import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const GoBackButton = () => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  };
  return (
    <div
      className="flex items-center justify-center h-10 w-10 rounded-full text-primary cursor-pointer transition-colors duration-300 ease-in-out hover:bg-btnHover bg-button dark:bg-purple-500 dark:text-purple-50 hover:dark:bg-purple-400"
      onClick={goBackHandler}
    >
      <AiOutlineArrowLeft className="h-5 w-5" />
    </div>
  );
};

export default GoBackButton;
