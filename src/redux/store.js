import { configureStore } from "@reduxjs/toolkit";
import configSlice from "./configSlice";
import videoSlice from "./videoSlice";
import savedVideosSlice from "./savedVideosSlice";
import searchSlice from "./searchSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    config: configSlice,
    video: videoSlice,
    saved: savedVideosSlice,
    search: searchSlice,
    users: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
