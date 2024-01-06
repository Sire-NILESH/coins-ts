import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSingleCoin } from "../uitls/api";
import { CoinInfo } from "../../typing";
import { RootState } from "./store";
import axios from "axios";

interface InitialState {
  isLoading: boolean;
  data: null | CoinInfo;
  timestamp: number;
  isError: boolean;
}

const initialState: InitialState = {
  isLoading: false,
  data: null,
  timestamp: Date.now(),
  isError: false,
};

// Async Thunk Action
export const fetchCoinInfo = createAsyncThunk(
  "fetch/coinInfo",
  async (coinId: string) => {
    const response = await axios.get(getSingleCoin(coinId));
    return response.data;
  }
);

const coinInfoSlice = createSlice({
  name: "coinInfo",
  initialState: initialState,
  reducers: {
    resetError: (state) => {
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCoinInfo.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.data = null;
    });
    builder.addCase(fetchCoinInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload as CoinInfo;
      state.timestamp = Date.now();
    });
    builder.addCase(fetchCoinInfo.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.timestamp = Date.now();
    });
  },
});

export const selectCoinInfoData = (state: RootState) => state.coinInfo.data;
export const selectCoinInfoIsLoading = (state: RootState) =>
  state.coinInfo.isLoading;
export const selectCoinInfoIsError = (state: RootState) =>
  state.coinInfo.isError;
export const selectCoinInfoTimestap = (state: RootState) =>
  state.coinInfo.timestamp;

export const coinInfoSliceActions = coinInfoSlice.actions;

const coinInfoSliceReducer = coinInfoSlice.reducer;

export default coinInfoSliceReducer;
