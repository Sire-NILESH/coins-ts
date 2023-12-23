import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTopCoins } from "../uitls/api";
import { CoinArray } from "../../typing";
import { RootState } from "./store";
import axios from "axios";

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
    const response = await axios.get(getTopCoins());
    return response.data;
  }
);

const topCoinsSlice = createSlice({
  name: "allTopCoins",
  initialState: initialState,
  reducers: {
    resetError: (state) => {
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTopCoins.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchTopCoins.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload as CoinArray;
    });
    builder.addCase(fetchTopCoins.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const selectTopCoinsData = (state: RootState) => state.topCoins.data;
export const selectTopCoinsIsLoading = (state: RootState) =>
  state.topCoins.isLoading;
export const selectTopCoinsIsError = (state: RootState) =>
  state.topCoins.isError;

export const topCoinsActions = topCoinsSlice.actions;

const topCoinsReducer = topCoinsSlice.reducer;

export default topCoinsReducer;
