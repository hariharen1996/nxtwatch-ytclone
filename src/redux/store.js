import { configureStore } from "@reduxjs/toolkit";
import configSlice from "./configSlice";
import videoSlice from "./videoSlice";

const store = configureStore({
  reducer: {
    config: configSlice,
    video: videoSlice
  },
});

export default store;
