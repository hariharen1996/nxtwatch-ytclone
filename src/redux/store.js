import { configureStore } from "@reduxjs/toolkit";
import configSlice from "./configSlice";
import videoSlice from "./videoSlice";
import savedVideosSlice from "./savedVideosSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    config: configSlice,
    video: videoSlice,
    saved: savedVideosSlice,
    search: searchSlice,
  },
});

export default store;
