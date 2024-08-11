import React from "react";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const LoadingPage = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <LoadingSpinner></LoadingSpinner>
    </div>
  );
};

export default LoadingPage;
