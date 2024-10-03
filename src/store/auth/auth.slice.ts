import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "./types";

const initialState: AuthState = {
  isAuth: false,
  homespaceId: null,
  userId: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      {
        payload,
      }: PayloadAction<{
        homespaceId: AuthState["homespaceId"];
        userId: AuthState["userId"];
      }>
    ) => {
      if (payload.homespaceId && payload.userId) {
        state.isAuth = true;
        state.homespaceId = payload.homespaceId;
        state.userId = payload.userId;
      }
    },
    logout: (state) => {
      state.isAuth = false;
      state.homespaceId = null;
      state.userId = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
