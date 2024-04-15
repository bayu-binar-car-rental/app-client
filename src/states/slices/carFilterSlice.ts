import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface IFilterState {
  driverType: string;
  rentDate: string;
  pickupTime: string;
  totalPassenger: string;
}

const initialState: IFilterState = {
  driverType: "Pilih Tipe Driver",
  rentDate: "",
  pickupTime: "",
  totalPassenger: "",
};

export const carFilterSlice = createSlice({
  name: "carFilter",
  initialState: initialState,
  reducers: {
    setDriverType: (state, action) => {
      state.driverType = action.payload;
    },
    setRentDate: (state, action) => {
      state.rentDate = action.payload;
    },
    setPickupTime: (state, action) => {
      state.pickupTime = action.payload;
    },
    setTotalPassenger: (state, action) => {
      state.totalPassenger = action.payload;
    },
  },
});

export default carFilterSlice.reducer;
export const { setDriverType, setRentDate, setPickupTime, setTotalPassenger } =
  carFilterSlice.actions;
export const selectCarFilters = (state: RootState) => state.carFilter;
