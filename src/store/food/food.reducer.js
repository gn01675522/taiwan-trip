import { FOOD_ACTION_TYPES } from "./food.types";

const { FETCH_FOOD_START, FETCH_FOOD_SUCCESS, FETCH_FOOD_FAILED } =
  FOOD_ACTION_TYPES;

const INITIAL_STATE = {
  foodList: [],
  isLoading: false,
  error: null,
};

export const foodReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_FOOD_START:
      return { ...state, isLoading: true };
    case FETCH_FOOD_SUCCESS:
      return { ...state, foodList: payload, isLoading: false };
    case FETCH_FOOD_FAILED:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};
