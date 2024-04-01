import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface IToggleState {
  isToggle: boolean;
}

const initialState: IToggleState = {
  isToggle: false,
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState: initialState,
  reducers: {
    setIsToggle: (state, action) => {
      state.isToggle = action.payload;
    },
  },
});

export default toggleSlice.reducer;
export const { setIsToggle } = toggleSlice.actions;
export const selectToggle = (state: RootState) => state.toggle.isToggle;
