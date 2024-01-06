import useDBWatchlistActions from "../hooks/useDBWatchlistActions";
import Button from "./ui/Button";

type Props = {
  coinId: string;
};

const CoinPageWatchlistBtn = ({ coinId }: Props) => {
  const { isCoinWatchlisted, addToWatchlist, removeFromWatchlist } =
    useDBWatchlistActions();

  const isWatchlisted = isCoinWatchlisted(coinId);

  function onClickHandler() {
    isWatchlisted ? removeFromWatchlist(coinId) : addToWatchlist(coinId);
  }

  return (
    <div className="mt-3 md:mt-5 lg:mt-0 flex flex-col items-center">
      <Button
        onClick={onClickHandler}
        className={`mt-6 lg:mt-16 h-10 w-full max-w-md ${
          isWatchlisted ? "!bg-yellow-600" : ""
        }`}
      >
        <p
          className={`text-base ${
            isWatchlisted ? "text-white" : "text-primary"
          }`}
        >
          {isWatchlisted ? "Watchlisted" : "Add to watchllist"}
        </p>
      </Button>
    </div>
  );
};

export default CoinPageWatchlistBtn;
