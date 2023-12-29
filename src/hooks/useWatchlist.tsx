const useWatchlist = () => {
  // getting the watchlist coins
  // useEffect(() => {
  //    if (user) {
  //      const coinRef = doc(db, "watchlist", user?.uid);
  //      var unsubscribe = onSnapshot(coinRef, (coin) => {
  //        if (coin.exists()) {
  //          console.log(coin.data().coins);
  //          setWatchlist(coin.data().coins);
  //        } else {
  //          console.log("No Items in Watchlist");
  //        }
  //      });

  //      return () => {
  //        unsubscribe();
  //      };
  //    }
  //  }, [user]);

  //   const inWatchlist = watchlist.includes(coin?.id);

  //   const addToWatchlist = async () => {
  //     const coinRef = doc(db, "watchlist", user.uid);
  //     try {
  //       await setDoc(
  //         coinRef,
  //         { coins: watchlist ? [...watchlist, coin?.id] : [coin?.id] },
  //         { merge: true }
  //       );

  //       setAlert({
  //         open: true,
  //         message: `${coin.name} Added to the Watchlist !`,
  //         type: "success",
  //       });
  //     } catch (error) {
  //       setAlert({
  //         open: true,
  //         message: error.message,
  //         type: "error",
  //       });
  //     }
  //   };

  //   const removeFromWatchlist = async () => {
  //     const coinRef = doc(db, "watchlist", user.uid);
  //     try {
  //       await setDoc(
  //         coinRef,
  //         { coins: watchlist.filter((watch) => watch !== coin?.id) },
  //         { merge: true }
  //       );

  //       setAlert({
  //         open: true,
  //         message: `${coin.name} Removed from the Watchlist !`,
  //         type: "success",
  //       });
  //     } catch (error) {
  //       setAlert({
  //         open: true,
  //         message: error.message,
  //         type: "error",
  //       });
  //     }
  //   };

  return {};
};

export default useWatchlist;
