import { configureStore } from "@reduxjs/toolkit";
import topCoinsReducer from "./topCoinsSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import exchangesReducer from "./exchangesSlice";
import trendingCoinsReducer from "./trendingCoinsSlice";
import dataFetchTimeSliceReducer from "./dataFetchTimeSlice";
import authSliceReducer, {
  login,
  registerAccount,
  loginWithGoogle,
} from "./authSlice";
import initDataStatusSliceReducer from "./initDataStatusSlice";
import modalSliceReducer from "./modalSlice";

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    topCoins: topCoinsReducer,
    allTrendingCoins: trendingCoinsReducer,
    allExchanges: exchangesReducer,
    dataFetchTime: dataFetchTimeSliceReducer,
    initDataStatus: initDataStatusSliceReducer,
    modalSlice: modalSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "auth/setInitialAuthUser",
          registerAccount.fulfilled.type,
          login.fulfilled.type,
          loginWithGoogle.fulfilled.type,
          "modalSlice/modalHandler",
        ],
        ignoredPaths: ["auth.user", "modalSlice.onCloseModalHandler"],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
