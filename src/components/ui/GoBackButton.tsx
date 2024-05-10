import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { MdClose } from "react-icons/md";

const GoBackButton = () => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  };
  return (
    <Button
      className="flex items-center justify-center h-10 w-10"
      onClick={goBackHandler}
    >
      {/* {appIcons.close} */}
      <MdClose className="w-5 h-5" />
    </Button>
  );
};

export default GoBackButton;
