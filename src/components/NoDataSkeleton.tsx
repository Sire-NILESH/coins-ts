import React from "react";
import appIcons from "../config/appIcons";
import Button from "./ui/Button";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  isLoading: boolean;
  reloadHandler?: () => void;
};

const NoDataSkeleton = ({ className, isLoading, reloadHandler }: Props) => {
  return (
    <div
      className={`
      }] w-full bg-secondary rounded-3xl space-y-6 flex flex-col items-center justify-center ${className}`}
    >
      <div className="space-y-1">
        {<appIcons.error className="h-6 w-6 mx-auto" />}
        <p className="text-sm">Uh Oh, No data to show</p>
      </div>

      {reloadHandler ? (
        <Button
          onClick={reloadHandler}
          className="w-36 bg-btnHover flex items-center justify-center space-x-2 p-3"
        >
          <appIcons.Refresh className="h-4 w-4" />
          <p className="text-center text-sm">Try again</p>
        </Button>
      ) : null}
    </div>
  );
};

export default NoDataSkeleton;
