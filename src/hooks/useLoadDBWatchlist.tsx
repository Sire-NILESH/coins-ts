import { useEffect } from "react";
import { authSelectors } from "../redux/authSlice";
import { doc, onSnapshot } from "firebase/firestore";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { db } from "../uitls/firebase";
import { watchlistSliceActions } from "../redux/watchlistSlice";

const useLoadDBWatchlist = () => {
  const user = useAppSelector(authSelectors.authUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      if (user) {
        const coinRef = doc(db, "watchlist", user.uid);

        // when a coin is added/removed will also trigger this.
        var unsubscribe = onSnapshot(coinRef, (coin) => {
          if (coin.exists()) {
            const coins = coin.data().coins;
            if (coins && coins.length > 0) {
              dispatch(
                watchlistSliceActions.setDBWatchlistCoins({ coinIds: coins })
              );
            } else {
              dispatch(
                watchlistSliceActions.setDBWatchlistCoins({ coinIds: [] })
              );
            }
          }
        });

        return () => {
          unsubscribe();
        };
      }
    } catch (error) {
      // console.error(error);
    }
  }, [dispatch, user]);
};

export default useLoadDBWatchlist;
