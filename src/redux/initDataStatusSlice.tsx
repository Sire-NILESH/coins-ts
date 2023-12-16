import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type TInitDataStatus = "loading" | "success" | "false";
interface InitalState {
  initDataStatus: TInitDataStatus;
}

const initialState: InitalState = {
  initDataStatus: "false",
};

const initDataStatusSlice = createSlice({
  name: "initDataStatus",
  initialState: initialState,
  reducers: {
    setInitDataStatus: (state, action: PayloadAction<TInitDataStatus>) => {
      state.initDataStatus = action.payload;
    },
  },
});

export const selectInitDataStatusSlice = (state: RootState) =>
  state.initDataStatus;

export const { setInitDataStatus } = initDataStatusSlice.actions;

const initDataStatusSliceReducer = initDataStatusSlice.reducer;
export default initDataStatusSliceReducer;
