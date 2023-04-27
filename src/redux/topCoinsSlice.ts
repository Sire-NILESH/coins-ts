import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTopCoins } from "../uitls/api";
import { CoinArray } from "../../typing";

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
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

const topCoinsReducer = topCoinsSlice.reducer;

export default topCoinsReducer;
