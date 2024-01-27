import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = {
  searchData: [],
  word: "",
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    add(state, action) {
      state.searchData = action.payload;
    },
    remove(state, action) {
      state.searchData = action.payload;
    },
    searchword(state, action) {
      state.word = action.payload;
    },
    resetsearch(state) {
      state.searchData = [];
    },
  },
});

const searchItems = (state) => state.search.searchData;
const searchKey = (state) => state.search.word;

export const selectSearchData = createSelector(
  [searchItems],
  (searchData) => searchData
);

export const selectSearchWord = createSelector([searchKey], (word) => word);

export const { add, remove, searchword, resetsearch } = searchSlice.actions;
export default searchSlice.reducer;
