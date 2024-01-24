import appIcons from "../config/appIcons";
import Button from "./ui/Button";

type Props = {
  reloadHandler: () => void;
};

const NoDataErr = ({ reloadHandler }: Props) => {
  return (
    <div className="mt-24 py-4 overflow-hidden mx-auto max-w-lg space-y-4 flex flex-col items-center justify-center">
      <appIcons.error />
      <h4 className="text-primary text-3xl text-center">Error occured</h4>
      <p className="text-center text-secondary">
        Insufficient or no data detected. This could possibly be the result of
        crossing the API rate limit. Please try again later.
      </p>

      <Button
        onClick={reloadHandler}
        className="w-36 flex items-center justify-center space-x-2 p-3"
      >
        <appIcons.Refresh className="h-4 w-4" />
        <p className="text-center text-secondary text-sm">Try again</p>
      </Button>
    </div>
  );
};

export default NoDataErr;
