import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import useIsOverallDataError from "../hooks/useIsOverallDataError";
import { modalActions } from "../redux/modalSlice";
import useWatchlistData from "../hooks/useWatchlistData";
import { selectWatchlistCoinsIsError } from "../redux/watchlistSlice";

const DataErrorModal = () => {
  const dispatch = useAppDispatch();

  const { overallDataError, exchangesErr, topCoinsErr, trendingCoinsErr } =
    useIsOverallDataError();

  const watchlistIsError = useAppSelector(selectWatchlistCoinsIsError);

  // Handling app's fetch data errors (initial and reload) here with modal below
  useEffect(() => {
    if (overallDataError || watchlistIsError) {
      showModalWithError();
    }

    // eslint-disable-next-line
  }, [overallDataError, watchlistIsError]);

  function onModalClose() {
    dispatch(modalActions.resetModalHandler());
  }

  function showModalWithError() {
    dispatch(
      modalActions.modalHandler({
        isModalOpen: true,
        modalContent: {
          title: "Fetch error",
          description: `Encountered an error while fetching${
            exchangesErr ? " 'exchnages'" : ""
          } ${topCoinsErr ? " 'coins'" : ""} ${
            trendingCoinsErr ? " 'trending coins'" : ""
          } ${
            watchlistIsError ? "'watchlist'" : ""
          } data. Too many frequent requests were received which crossed the API limit. Please try again later by pressing refresh button after some time.`,
        },
        onCloseModalHandler: onModalClose,
      })
    );
  }

  return <></>;
};

export default DataErrorModal;
