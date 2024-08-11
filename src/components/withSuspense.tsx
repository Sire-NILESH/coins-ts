import React, { Suspense } from "react";
import LoadingPage from "../scenes/LoadingPage";

function withSuspense<T extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<T>
): React.FC<T> {
  const ComponentWithSuspense: React.FC<T> = (props) => {
    return (
      <Suspense fallback={<LoadingPage />}>
        <WrappedComponent {...props} />
      </Suspense>
    );
  };

  return ComponentWithSuspense;
}
export default withSuspense;
