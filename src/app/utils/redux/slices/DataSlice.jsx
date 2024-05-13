import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
  name: "mynews-redux",
  initialState: {
    berita: [],
    headline: "",
    newsByCategory: {},
  },
  reducers: {
    setDataBerita: (state, action) => {
      state.berita = action.payload;
    },
    setHeadline: (state, action) => {
      state.headline = action.payload;
    },
    setNewsByCategory: (state, action) => {
      state.newsByCategory = action.payload;
    },
  },
});

export const { setDataBerita, setHeadline, setNewsByCategory } =
  DataSlice.actions;
export default DataSlice.reducer;
