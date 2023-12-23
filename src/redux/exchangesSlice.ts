import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getExchanges } from "../uitls/api";
import { Exchange } from "../../typing";
import { RootState } from "./store";
import axios from "axios";

interface InitialState {
  isLoading: boolean;
  data: null | Exchange[];
  isError: boolean;
}

const initialState: InitialState = {
  isLoading: false,
  data: null,
  isError: false,
};

// Async Thunk Action
export const fetchExchanges = createAsyncThunk("fetch/exchanges", async () => {
  const response = await axios.get(getExchanges());
  return response.data;
});

const exchangesSlice = createSlice({
  name: "allExchanges",
  initialState: initialState,
  reducers: {
    resetError: (state) => {
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchExchanges.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchExchanges.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload as Exchange[];
    });
    builder.addCase(fetchExchanges.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const selectExchnagesData = (state: RootState) =>
  state.allExchanges.data;
export const selectExchnagesIsLoading = (state: RootState) =>
  state.allExchanges.isLoading;
export const selectExchnagesIsError = (state: RootState) =>
  state.allExchanges.isError;

export const exchangesActions = exchangesSlice.actions;

const exchangesReducer = exchangesSlice.reducer;

export default exchangesReducer;
