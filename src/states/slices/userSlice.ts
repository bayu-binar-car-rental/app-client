import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface IUserState {
  id: number;
  username: string;
  email: string;
  image: string | null;
  role: string;
}

const initialState: IUserState = {
  id: 0,
  username: "",
  email: "",
  image: null,
  role: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
