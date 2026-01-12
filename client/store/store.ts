import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import languageReducer from "./slices/languageSlice";
import drReducer from "./slices/selectedDrSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    language: languageReducer,
    dr: drReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
