import { Outlet } from "react-router-dom";
import Modal from "./ui/Modal";
import { useAppSelector } from "../redux/store";
import { selectModalSlice } from "../redux/modalSlice";

const AppLayout = () => {
  const { isModalOpen, modalContent, onCloseModalHandler } =
    useAppSelector(selectModalSlice);

  return (
    <div className="bg-secondary text-slate-700 dark-bg flex items-center justify-center min-h-screen font-poppins">
      <Outlet />

      <Modal
        isModalOpen={isModalOpen}
        onCloseModalHandler={onCloseModalHandler}
        modalContent={modalContent}
      />
    </div>
  );
};

export default AppLayout;
