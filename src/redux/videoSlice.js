import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    videos: [],
    specificVideos: null,
    trendingVideos: [],
    gamingVideos: [],
  },
  reducers: {
    addVideos: (state, action) => {
      state.videos = action.payload;
    },
    addVideoDetails: (state, action) => {
      state.specificVideos = action.payload;
      
    },
    addTrendingVideos: (state, action) => {
      state.trendingVideos = action.payload;
    },
    addGamingVideos: (state, action) => {
      state.gamingVideos = action.payload;
    },
  },
});

export const {
  addVideos,
  addVideoDetails,
  addTrendingVideos,
  addGamingVideos,
} = videoSlice.actions;
export default videoSlice.reducer;
