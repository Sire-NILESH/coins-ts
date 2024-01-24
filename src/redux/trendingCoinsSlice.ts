import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTrendingCoins } from "../uitls/api";
import { Trending } from "../../typing";
import { RootState } from "./store";
import axios from "axios";
import { trending } from "../data/trending/trendingCoins";

interface InitialState {
  isLoading: boolean;
  data: null | Trending;
  isError: boolean;
  timestamp: number;
}

const initialState: InitialState = {
  isLoading: false,
  data: null,
  isError: false,
  timestamp: Date.now(),
};

// Async Thunk Action
export const fetchTrending = createAsyncThunk(
  "fetch/trendingCoins",
  async () => {
    // const response = await axios.get(getTrendingCoins());
    const response: { data: Trending } = await new Promise((resolve) => {
      setTimeout(() => resolve({ data: trending }), 80);
    });
    return response.data;
  }
);

const trendingCoinsSlice = createSlice({
  name: "allTrendingCoins",
  initialState: initialState,
  reducers: {
    resetError: (state) => {
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTrending.pending, (state, _action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchTrending.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload as Trending;
      state.timestamp = Date.now();
    });
    builder.addCase(fetchTrending.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const selectTrendingCoinsData = (state: RootState) =>
  state.allTrendingCoins.data;
export const selectTrendingCoinsIsLoading = (state: RootState) =>
  state.allTrendingCoins.isLoading;
export const selectTrendingCoinsIsError = (state: RootState) =>
  state.allTrendingCoins.isError;
export const selectTrendingCoinsTimeStamp = (state: RootState) =>
  state.allTrendingCoins.timestamp;

export const trendingCoinsActions = trendingCoinsSlice.actions;

const trendingCoinsReducer = trendingCoinsSlice.reducer;

export default trendingCoinsReducer;
