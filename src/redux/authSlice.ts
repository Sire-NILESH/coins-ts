import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../firebase";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { RootState } from "./store";
import { z } from "zod";
import {
  loginAuthSchema,
  registerAuthSchema,
} from "../uitls/validationSchemas";

type AuthStates = {
  user: User | null;
  initialLoading: boolean;
  isLoading: boolean;
  error: any | null;
};

type LoginArgs = z.infer<typeof loginAuthSchema>;
type RegisterArgs = z.infer<typeof registerAuthSchema>;

const initialState: AuthStates = {
  initialLoading: false,
  isLoading: false,
  user: null,
  error: null,
};

export const registerAccount = createAsyncThunk(
  "auth/register",
  async ({ email, userName, password }: RegisterArgs) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(userCredential.user, {
      displayName: userName,
      photoURL: null,
    });

    return userCredential;
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: LoginArgs) => {
    const login = await signInWithEmailAndPassword(auth, email, password);

    return login;
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  const result = await signOut(auth);
  return result;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setInitialAuthUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },

    setInitialAuthLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    resetAuthErrors: (state) => {
      state.error = null;
      state.isLoading = false;
    },
  },
  extraReducers(builder) {
    // Login
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action);
      state.user = action.payload.user;
      state.isLoading = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });

    // Register
    builder.addCase(registerAccount.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerAccount.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.isLoading = false;
    });
    builder.addCase(registerAccount.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });

    // Logout
    builder.addCase(logout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
      state.isLoading = false;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
  },
});

const authUser = (state: RootState) => state.auth.user;
const isAuthLoading = (state: RootState) => state.auth.isLoading;
const isAuthInitialLoading = (state: RootState) => state.auth.initialLoading;
const authError = (state: RootState) => state.auth.error;

export const authSelectors = {
  authUser,
  isAuthLoading,
  isAuthInitialLoading,
  authError,
};

export const authActions = authSlice.actions;

const authSliceReducer = authSlice.reducer;

export default authSliceReducer;
