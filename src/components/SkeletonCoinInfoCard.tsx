const SkeletonCoinInfoCard = () => {
  return (
    <div className="h-[500px] w-[20rem] rounded-2xl place-self-center space-y-3 p-4">
      <div className="h-6 flex justify-between">
        <div className="space-x-2">
          <div className="inline-block bg-secondary animate-pulse h-6 w-6 rounded-full" />

          <div className="inline-block bg-secondary animate-pulse h-6 w-20 rounded-md" />
        </div>
        <div className="bg-secondary animate-pulse h-6 w-20 rounded-md" />
      </div>

      <div className="bg-secondary animate-pulse h-36 rounded-3xl" />

      <div className="!mt-8 bg-secondary animate-pulse h-4 rounded-md" />
      <div className="bg-secondary animate-pulse h-4 rounded-md" />
      <div className="bg-secondary animate-pulse h-4 rounded-md" />
      <div className="bg-secondary animate-pulse h-4 rounded-md" />

      <div className="!mt-8 bg-secondary animate-pulse h-36 rounded-3xl" />
    </div>
  );
};

export default SkeletonCoinInfoCard;
