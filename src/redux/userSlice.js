import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userinfo",
  initialState: null,
  reducers: {
    addUserInfo: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { addUserInfo, removeUser } = userSlice.actions;
export default userSlice.reducer;
