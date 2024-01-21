import { useAppDispatch, useAppSelector } from "../redux/store";
import { authSelectors } from "../redux/authSlice";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { selectDBWatchlistCoins } from "../redux/watchlistSlice";
import { useMemo } from "react";
import { modalActions } from "../redux/modalSlice";

const useDBWatchlistActions = () => {
  const user = useAppSelector(authSelectors.authUser);
  const watchlist = useAppSelector(selectDBWatchlistCoins);

  const lookup = useMemo(() => new Set(watchlist), [watchlist]);

  const dispatch = useAppDispatch();

  const isCoinWatchlisted = (coinId: string) => {
    return lookup.has(coinId);
  };

  const onModalClose = () => {
    dispatch(modalActions.resetModalHandler());
  };

  const onError = () => {
    dispatch(
      modalActions.modalHandler({
        isModalOpen: true,
        modalContent: {
          title: "Failed watchlist action",
          description:
            "Something went wrong while performing that watchlist action. Please try again later.",
        },
        onCloseModalHandler: onModalClose,
      })
    );
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
        onError();
      }
    }
  };

  const removeFromWatchlist = async (coinId: string) => {
    if (user && isCoinWatchlisted(coinId)) {
      console.log("help");
      const coinRef = doc(db, "watchlist", user.uid);
      try {
        await setDoc(
          coinRef,
          { coins: watchlist.filter((watch) => watch !== coinId) },
          { merge: true }
        );
      } catch (error) {
        onError();
      }
    }
  };

  return { isCoinWatchlisted, addToWatchlist, removeFromWatchlist };
};

export default useDBWatchlistActions;
