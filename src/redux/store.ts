import { configureStore } from "@reduxjs/toolkit";
import topCoinsReducer from "./topCoinsSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import exchangesReducer from "./exchangesSlice";
import trendingCoinsReducer from "./trendingCoinsSlice";
import dataFetchTimeSliceReducer from "./dataFetchTimeSlice";
import authSliceReducer, { login, registerAccount } from "./authSlice";

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    topCoins: topCoinsReducer,
    allTrendingCoins: trendingCoinsReducer,
    allExchanges: exchangesReducer,
    dataFetchTime: dataFetchTimeSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "auth/setInitialAuthUser",
          login.fulfilled.type,
          registerAccount.fulfilled.type,
        ],
        ignoredPaths: ["auth.user"],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
