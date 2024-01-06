import { useNavigate } from "react-router-dom";
import appIcons from "../../config/appIcons";
import Button from "./Button";

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
      {appIcons.arrowLeft}
    </Button>
  );
};

export default GoBackButton;
