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
        ScenicSpotID: id,
        ScenicSpotName: title,
        Address: address,
        DescriptionDetail: description,
        City: location,
        Picture: picture,
        Phone: phone,
        OpenTime,
      } = scenicSpot;

      const during =
        OpenTime === "開放空間" ? OpenTime.concat("，無時間限制") : OpenTime;

      acc.push({
        id,
        title,
        address,
        description,
        location,
        picture,
        phone,
        during,
      });
      return acc;
    }, [])
);

export const selectScenicSpotIsLoading = createSelector(
  [selectScenicSpot],
  (scenicSpots) => scenicSpots.isLoading
);
