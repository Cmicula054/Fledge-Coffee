// navSlice.js

import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice({
  name: "nav",
  initialState: {
    selectedLink: "",
  },
  reducers: {
    selectLink: (state, action) => {
      state.selectedLink = action.payload;
    },
  },
});

export const { selectLink } = navSlice.actions;

export default navSlice.reducer;
