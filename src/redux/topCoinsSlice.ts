import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTopCoins } from "../uitls/api";
import { CoinArray } from "../../typing";
import { RootState } from "./store";

interface InitialState {
  isLoading: boolean;
  data: null | CoinArray;
  isError: boolean;
}

const initialState: InitialState = {
  isLoading: false,
  data: null,
  isError: false,
};

// Async Thunk Action
export const fetchTopCoins = createAsyncThunk(
  "fetch/topCurrencies",
  async () => {
    const response = await fetch(getTopCoins());
    return response.json();
  }
);

const topCoinsSlice = createSlice({
  name: "allTopCoins",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTopCoins.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTopCoins.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload as CoinArray;
    });
    builder.addCase(fetchTopCoins.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export const selectTopCoinsDataSlice = (state: RootState) => state.topCoins;

const topCoinsReducer = topCoinsSlice.reducer;

export default topCoinsReducer;
