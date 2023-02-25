import { createSelector } from "@reduxjs/toolkit";

const selectFoodReducer = (state) => state.food;

export const selectFoodList = createSelector(
  [selectFoodReducer],
  (food) => food.foodList
);

export const selectFoodListMap = createSelector([selectFoodList], (foodList) =>
  foodList.reduce((acc, food) => {
    const {
      RestaurantID: Id,
      RestaurantName: Title,
      Address,
      Description,
      Location,
      Picture,
      Phone,
      OpenTime: Cycle,
    } = food;

    acc.push({
      Id,
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

export const selectFoodIsLoading = createSelector(
  [selectFoodReducer],
  (food) => food.isLoading
);
