import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Coin } from "../../typing";
import { getWatchlistCoins } from "../uitls/api";
import { RootState } from "./store";

interface InitialState {
  dbWatchlistCoins: string[];
  checkTicket: boolean;
  isLoading: boolean;
  data: null | Coin[];
  isError: boolean;
}

const initialState: InitialState = {
  dbWatchlistCoins: [],
  isLoading: false,
  checkTicket: false,
  data: null,
  isError: false,
};

// Async Thunk Action
export const fetchWatchlistCoinsInfo = createAsyncThunk(
  "fetch/WatchlistCoinsInfo",
  async (coinIds: string[]) => {
    const response = await axios.get(getWatchlistCoins(coinIds));
    return response.data;
  }
);

const watchlistSlice = createSlice({
  name: "watchlistSlice",
  initialState,
  reducers: {
    // when a coin is added/removed will also be handled by this because of useLoadDBWatchlist eventlistener.
    setDBWatchlistCoins: (
      state,
      action: PayloadAction<{ coinIds: string[] }>
    ) => {
      if (action.payload.coinIds) {
        state.dbWatchlistCoins = [...action.payload.coinIds];
        state.checkTicket = true;
      }
    },
    resetError: (state) => {
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWatchlistCoinsInfo.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.data = null;
    });
    builder.addCase(fetchWatchlistCoinsInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload as Coin[];
      state.checkTicket = false;
    });
    builder.addCase(fetchWatchlistCoinsInfo.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.checkTicket = false;
    });
  },
});

export const selectDBWatchlistCoins = (state: RootState) =>
  state.watchlistSlice.dbWatchlistCoins;
export const selectWatchlistCoinsData = (state: RootState) =>
  state.watchlistSlice.data;
export const selectWatchlistCoinsIsLoading = (state: RootState) =>
  state.watchlistSlice.isLoading;
export const selectWatchlistCoinsIsError = (state: RootState) =>
  state.watchlistSlice.isError;
export const selectshouldFetchWatchlistCoins = (state: RootState) =>
  state.watchlistSlice.checkTicket;

export const watchlistSliceActions = watchlistSlice.actions;

const watchlistSliceReducer = watchlistSlice.reducer;

export default watchlistSliceReducer;
