import { useAppSelector } from "../redux/store";
import { authSelectors } from "../redux/authSlice";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { selectDBWatchlistCoins } from "../redux/watchlistSlice";
import { useMemo } from "react";

const useDBWatchlistActions = () => {
  const user = useAppSelector(authSelectors.authUser);
  const watchlist = useAppSelector(selectDBWatchlistCoins);

  const lookup = useMemo(() => new Set(watchlist), [watchlist]);

  const isCoinWatchlisted = (coinId: string) => {
    return lookup.has(coinId);
  };

  const addToWatchlist = async (coinId: string) => {
    if (user && !isCoinWatchlisted(coinId)) {
      const coinRef = doc(db, "watchlist", user.uid);

      try {
        await setDoc(
          coinRef,
          { coins: watchlist.length > 0 ? [...watchlist, coinId] : [coinId] },
          { merge: true }
        );
      } catch (error) {
        console.log("Error Adding watchlist", coinId, error);
      }
    }
  };

  const removeFromWatchlist = async (coinId: string) => {
    if (user && isCoinWatchlisted(coinId)) {
      const coinRef = doc(db, "watchlist", user.uid);
      try {
        await setDoc(
          coinRef,
          { coins: watchlist.filter((watch) => watch !== coinId) },
          { merge: true }
        );
      } catch (error) {
        console.log("Error Adding watchlist", coinId, error);
      }
    }
  };

  return { isCoinWatchlisted, addToWatchlist, removeFromWatchlist };
};

export default useDBWatchlistActions;
