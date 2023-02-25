import { createSelector } from "@reduxjs/toolkit";

const selectScenicSpot = (state) => state.scenicSpot;

export const selectScenicSpotList = createSelector(
  [selectScenicSpot],
  (scenicSpots) => scenicSpots.scenicSpotList
);

export const selectScenicSpotListMap = createSelector(
  [selectScenicSpotList],
  (scenicSpots) =>
    scenicSpots.reduce((acc, scenicSpot) => {
      const {
        ScenicSpotName: Title,
        Address,
        DescriptionDetail: Description,
        City: Location,
        Picture,
        Phone,
        OpenTime: Cycle,
      } = scenicSpot;

      acc.push({
        Title,
        Address,
        Description,
        Location,
        Picture,
        Phone,
        Cycle,
      });
      return acc;
    }, [])
);

export const selectScenicSpotIsLoading = createSelector(
  [selectScenicSpot],
  (scenicSpots) => scenicSpots.isLoading
);
