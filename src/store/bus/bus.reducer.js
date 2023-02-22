import { BUS_ACTION_TYPES } from "./bus.types";

const {
  FETCH_BUS_ROUTES_START,
  FETCH_BUS_ROUTES_SUCCESS,
  FETCH_BUS_ROUTES_FAILED,
} = BUS_ACTION_TYPES;

export const BUS_INITIAL_STATE = {
  busRoutes: [],
  isLoading: false,
  error: null,
};

export const busReducer = (state = BUS_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_BUS_ROUTES_START:
      return { ...state, isLoading: true };
    case FETCH_BUS_ROUTES_SUCCESS:
      return { ...state, busRoutes: payload, isLoading: false };
    case FETCH_BUS_ROUTES_FAILED:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};
