import { createSelector } from "@reduxjs/toolkit";

const selectSearch = (state) => state.search;

export const selectSearchKeyword = createSelector(
  [selectSearch],
  (keyword) => keyword.searchKeyword
);

export const selectSearchCategory = createSelector(
  [selectSearch],
  (category) => category.searchCategory
);

export const selectSearchCounty = createSelector(
  [selectSearch],
  (county) => county.searchCounty
);
