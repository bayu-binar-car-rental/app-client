import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface IUserState {
  id: number;
  username: string;
  email: string;
  role: string;
}

const initialState: IUserState = {
  id: 0,
  username: "",
  email: "",
  role: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.role = action.payload.role;
    },
  },
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
