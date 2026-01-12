import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  // user:{name:'Zain Hussain' , email:'zain@mail.com' , phone:'+923000000' , profileImage:''},
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});
export default userSlice.reducer;
export const { setUser, clearUser } = userSlice.actions;
