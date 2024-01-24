const LoadingRowsSkeleton = ({
  isLoading,
  rowCount,
}: {
  isLoading: boolean;
  rowCount: number;
}) => {
  return (
    <>
      {isLoading
        ? Array.from({ length: rowCount }).map((_, i) => {
            return (
              <div
                key={i}
                className="bg-secondary animate-pulse h-12 rounded-md my-2"
              />
            );
          })
        : null}
    </>
  );
};

export default LoadingRowsSkeleton;
