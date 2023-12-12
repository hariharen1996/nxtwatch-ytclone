import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchData: [],
  },
  reducers: {
    addSearchData: (state, action) => {
      state.searchData = action.payload;
    },
  },
});

export const { addSearchData } = searchSlice.actions;
export default searchSlice.reducer;
