import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTopCoins } from "../uitls/api";
import { Coin } from "../../typing";
import { RootState } from "./store";
import axios from "axios";

interface InitialState {
  isLoading: boolean;
  data: null | Coin[];
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
    builder.addCase(fetchTopCoins.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchTopCoins.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload as Coin[];
      state.timestamp = Date.now();
    });
    builder.addCase(fetchTopCoins.rejected, (state) => {
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
export const selectTopCoinsTimeStamp = (state: RootState) =>
  state.topCoins.timestamp;

export const topCoinsActions = topCoinsSlice.actions;

const topCoinsReducer = topCoinsSlice.reducer;

export default topCoinsReducer;
