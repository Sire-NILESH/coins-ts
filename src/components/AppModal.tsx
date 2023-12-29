import React from "react";
import Modal from "./ui/Modal";
import { useAppSelector } from "../redux/store";
import { selectModalSlice } from "../redux/modalSlice";

const AppModal = () => {
  // app's modal is handled here.
  const { isModalOpen, modalContent, onCloseModalHandler } =
    useAppSelector(selectModalSlice);

  return (
    <Modal
      isModalOpen={isModalOpen}
      onCloseModalHandler={onCloseModalHandler}
      modalContent={modalContent}
    />
  );
};

export default AppModal;
