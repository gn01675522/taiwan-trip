import { createSelector } from "@reduxjs/toolkit";

const selectFoodReducer = (state) => state.food;

export const selectFoodList = createSelector(
  [selectFoodReducer],
  (food) => food.foodList
);

export const selectFoodListMap = createSelector([selectFoodList], (foodList) =>
  foodList.reduce((acc, food) => {
    const {
      RestaurantID: id,
      RestaurantName: title,
      Address: address,
      Description: description,
      Picture: picture,
      Phone: phone,
      OpenTime: during,
    } = food;

    const location = address.slice(0, 6);

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

export const selectFoodIsLoading = createSelector(
  [selectFoodReducer],
  (food) => food.isLoading
);
