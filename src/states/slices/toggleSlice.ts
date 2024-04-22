import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface IToggleState {
  toggleNavbarCanvas: boolean;
  toggleProfileCanvas: boolean;
}

const initialState: IToggleState = {
  toggleNavbarCanvas: false,
  toggleProfileCanvas: false,
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState: initialState,
  reducers: {
    setToggleNavbarCanvas: (state, action) => {
      state.toggleNavbarCanvas = action.payload;
    },
    setToggleProfileCanvas: (state, action) => {
      state.toggleProfileCanvas = action.payload;
    },
    setToggleCanvas: (state, action) => {
      state = { ...state, ...action.payload };
    },
  },
});

export default toggleSlice.reducer;
export const {
  setToggleNavbarCanvas,
  setToggleProfileCanvas,
  setToggleCanvas,
} = toggleSlice.actions;
export const selectToggle = (state: RootState) => state.toggle;
