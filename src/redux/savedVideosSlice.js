import { createSlice } from "@reduxjs/toolkit";

const savedVideosSlice = createSlice({
  name: "savedVideos",
  initialState: {
    savedVideos: [],
  },
  reducers: {
    addSavedVideos: (state, action) => {
      const newVideos = [...state.savedVideos, ...action.payload]
        state.savedVideos = newVideos
    },
  },
});

export const { addSavedVideos } = savedVideosSlice.actions;
export default savedVideosSlice.reducer;
