import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import authSlice from "./slices/authSlice";
import toggleSlice from "./slices/toggleSlice";
import loadingSlice from "./slices/loadingSlice";
import carFilterSlice from "./slices/carFilterSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
    toggle: toggleSlice,
    loading: loadingSlice,
    carFilter: carFilterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
