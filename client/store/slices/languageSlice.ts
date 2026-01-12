import { createSlice } from "@reduxjs/toolkit";

const initialState = { language: localStorage.getItem("language") || "en" };

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setCurrentLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem("language", action.payload);
    },
  },
});

export default languageSlice.reducer;
export const { setCurrentLanguage } = languageSlice.actions;
