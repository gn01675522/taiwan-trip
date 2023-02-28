import { FOOD_ACTION_TYPES } from "./food.types";
import { createAction } from "../../utils/reducer/reducer.utils";

import { getTDXFoodList } from "../../API/getApiData";

const { FETCH_FOOD_START, FETCH_FOOD_SUCCESS, FETCH_FOOD_FAILED } =
  FOOD_ACTION_TYPES;

export const fetchFoodListStart = () => createAction(FETCH_FOOD_START);

export const fetchFoodListSuccess = (foodList) =>
  createAction(FETCH_FOOD_SUCCESS, foodList);

export const fetchFoodListFailed = (error) =>
  createAction(FETCH_FOOD_FAILED, error);

export const fetchFoodListAsync = (county) => {
  return async (dispatch) => {
    dispatch(fetchFoodListStart());
    try {
      const foodList = await getTDXFoodList(county);
      dispatch(fetchFoodListSuccess(foodList));
    } catch (error) {
      dispatch(fetchFoodListFailed());
    }
  };
};
