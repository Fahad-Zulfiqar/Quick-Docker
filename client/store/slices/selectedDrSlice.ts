import { createSlice } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const drSlice = createSlice({
  name: "drSlice",
  initialState: { selectedDr: null, serviceType: null },
  reducers: {
    setServiceType: (state, action) => {
      state.serviceType = action.payload;
    },
    setDr: (state, action) => {
      state.selectedDr = action.payload;
    },
    clearDr: (state, action) => {
      state.selectedDr = null;
    },
  },
});

export default drSlice.reducer;
export const { setDr, clearDr, setServiceType } = drSlice.actions;
