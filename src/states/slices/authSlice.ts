import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface IAuthState {
  isLoggedIn: string | null;
}

const initialState: IAuthState = {
  isLoggedIn: localStorage.getItem("token"),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state) => {
      state.isLoggedIn = localStorage.getItem("token");
    },
  },
});

export default authSlice.reducer;
export const { setToken } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth.isLoggedIn;
