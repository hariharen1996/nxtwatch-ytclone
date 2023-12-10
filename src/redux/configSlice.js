import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "configuration",
  initialState: {
    isTheme: true,
    isMenu: true,
    isUser: true,
  },
  reducers: {
    showTheme: (state) => {
      state.isTheme = !state.isTheme;
    },
    showMenu: (state) => {
      state.isMenu = !state.isMenu;
    },
    showUser: (state) => {
      state.isUser = !state.isUser;
    },
  },
});

export const { showTheme, showMenu, showUser } = configSlice.actions;
export default configSlice.reducer;
