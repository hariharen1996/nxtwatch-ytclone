import { configureStore } from "@reduxjs/toolkit";
import configSlice from "./configSlice";

const store = configureStore({
  reducer: {
    config: configSlice,
  },
});

export default store;
