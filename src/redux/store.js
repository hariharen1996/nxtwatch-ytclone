import { configureStore } from "@reduxjs/toolkit";
import configSlice from "./configSlice";
import videoSlice from "./videoSlice";
import savedVideosSlice from "./savedVideosSlice";

const store = configureStore({
  reducer: {
    config: configSlice,
    video: videoSlice,
    saved: savedVideosSlice,
  },
});

export default store;
