import { createSelector } from "@reduxjs/toolkit";

const selectScenicSpot = (state) => state.scenicSpot;

export const selectScenicSpotList = createSelector(
  [selectScenicSpot],
  (scenicSpot) => scenicSpot.scenicSpotList
);

export const selectScenicSpotIsLoading = createSelector(
  [selectScenicSpot],
  (scenicSpot) => scenicSpot.isLoading
);
