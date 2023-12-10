import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    videos: [],
    specificVideos: [],
  },
  reducers: {
    addVideos: (state, action) => {
      state.videos = action.payload;
    },
    addVideoDetails: (state, action) => {
      state.specificVideos = action.payload;
    },
  },
});

export const { addVideos, addVideoDetails } = videoSlice.actions;
export default videoSlice.reducer;
