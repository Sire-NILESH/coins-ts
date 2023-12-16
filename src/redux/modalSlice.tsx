import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModalProps } from "../../typing";
import { RootState } from "./store";

const initialState: ModalProps = {
  isModalOpen: false,
  onCloseModalHandler: function () {},
  modalContent: {
    title: "",
    description: "",
  },
};

const modalSlice = createSlice({
  name: "modalSlice",
  initialState: initialState,
  reducers: {
    modalHandler: (state, action: PayloadAction<ModalProps>) => {
      state.isModalOpen = action.payload.isModalOpen;
      state.onCloseModalHandler = action.payload.onCloseModalHandler;
      state.modalContent = action.payload.modalContent;
    },
    resetModalHandler: (state) => {
      state.isModalOpen = initialState.isModalOpen;
      state.onCloseModalHandler = initialState.onCloseModalHandler;
      state.modalContent = initialState.modalContent;
    },
  },
});

export const selectModalSlice = (state: RootState) => state.modalSlice;

export const modalActions = modalSlice.actions;

const modalSliceReducer = modalSlice.reducer;
export default modalSliceReducer;
