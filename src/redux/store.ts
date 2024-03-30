import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import toggleSlice from "./slices/toggleSlice";
import loadingSlice from "./slices/loadingSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    toggle: toggleSlice,
    loading: loadingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
