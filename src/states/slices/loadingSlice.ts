import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ILoadingState {
  isLoading: boolean;
}

const initialState: ILoadingState = {
  isLoading: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState: initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export default loadingSlice.reducer;
export const { setIsLoading } = loadingSlice.actions;
export const selectLoading = (state: RootState) => state.loading.isLoading;
