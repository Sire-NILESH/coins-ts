import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface InitialState {
  time: number;
}

const initialState: InitialState = { time: Date.now() };

const dataFetchTimeSlice = createSlice({
  name: "dataFetchTimeSlice",
  initialState: initialState,
  reducers: {
    setDataFetchTime: (state, action: PayloadAction<number>) => {
      state.time = action.payload;
    },
  },
});

export const selectDataFetchTimeSlice = (state: RootState) =>
  state.dataFetchTime;

export const { setDataFetchTime } = dataFetchTimeSlice.actions;

const dataFetchTimeSliceReducer = dataFetchTimeSlice.reducer;
export default dataFetchTimeSliceReducer;
