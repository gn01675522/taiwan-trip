import { createSelector } from "@reduxjs/toolkit";

const selectFoodReducer = (state) => state.food;

export const selectFoodList = createSelector(
  [selectFoodReducer],
  (food) => food.foodList
);

export const selectFoodIsLoading = createSelector(
  [selectFoodReducer],
  (food) => food.isLoading
);
