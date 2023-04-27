import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getExchanges } from "../uitls/api";
import { Exchange } from "../../typing";

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
  const response = await fetch(getExchanges());
  return response.json();
});

const exchangesSlice = createSlice({
  name: "allExchanges",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchExchanges.pending, (state, _action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchExchanges.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload as Exchange[];
    });
    builder.addCase(fetchExchanges.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

const exchangesReducer = exchangesSlice.reducer;

export default exchangesReducer;
