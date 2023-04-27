import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTrendingCoins } from "../uitls/api";
import { Trending } from "../../typing";

interface InitialState {
  isLoading: boolean;
  data: null | Trending;
  isError: boolean;
}

const initialState: InitialState = {
  isLoading: false,
  data: null,
  isError: false,
};

// Async Thunk Action
export const fetchTrending = createAsyncThunk(
  "fetch/trendingCoins",
  async () => {
    const response = await fetch(getTrendingCoins());
    return response.json();
  }
);

const trendingCoinsSlice = createSlice({
  name: "allTrendingCoins",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTrending.pending, (state, _action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTrending.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload as Trending;
    });
    builder.addCase(fetchTrending.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

const trendingCoinsReducer = trendingCoinsSlice.reducer;

export default trendingCoinsReducer;
