import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import useIsOverallDataError from "../hooks/useIsOverallDataError";
import useLoadInitData from "../hooks/useLoadInitData";
import { modalActions } from "../redux/modalSlice";
import { useAppDispatch } from "../redux/store";

const DataLayer = () => {
  // Load the initial data
  useLoadInitData();

  const dispatch = useAppDispatch();

  const { overallDataError, exchangesErr, topCoinsErr, trendingCoinsErr } =
    useIsOverallDataError();

  // Handling app's fetch data errors (initial and reload) here with modal below
  useEffect(() => {
    if (overallDataError) {
      showModalWithError();
    }

    // eslint-disable-next-line
  }, [overallDataError]);

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
          } data. Too many frequent requests were received which crossed the API limit. Please try again later by pressing refresh button after some time.`,
        },
        onCloseModalHandler: onModalClose,
      })
    );
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default DataLayer;
