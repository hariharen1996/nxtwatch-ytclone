import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "configuration",
  initialState: {
    isTheme: true,
    isMenu: false,
    isUser: true,
    isLoading: false,
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
    showLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { showTheme, showMenu, showUser, showLoading } =
  configSlice.actions;
export default configSlice.reducer;
