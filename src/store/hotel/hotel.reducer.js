import { HOTEL_ACTION_TYPES } from "./hotel.types";

const { FETCH_HOTEL_START, FETCH_HOTEL_SUCCESS, FETCH_HOTEL_FAILED } =
  HOTEL_ACTION_TYPES;

const INITIAL_STATE = {
  hotelList: [],
  isLoading: false,
  error: null,
};

export const hotelReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_HOTEL_START:
      return { ...state, isLoading: true };
    case FETCH_HOTEL_SUCCESS:
      return { ...state, hotelList: payload, isLoading: false };
    case FETCH_HOTEL_FAILED:
      return { ...state, error: payload, isLoading: true };
    default:
      return state;
  }
};
