import { SCENIC_SPOT_ACTION_TYPES } from "./scenicSpot.types";

const {
  FETCH_SCENIC_SPOT_START,
  FETCH_SCENIC_SPOT_SUCCESS,
  FETCH_SCENIC_SPOT_FAILED,
} = SCENIC_SPOT_ACTION_TYPES;

const INITIAL_STATE = {
  scenicSpotList: [],
  isLoading: false,
  error: null,
};

export const scenicSpotReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_SCENIC_SPOT_START:
      return { ...state, isLading: true };
    case FETCH_SCENIC_SPOT_SUCCESS:
      return { ...state, scenicSpotList: payload, isLading: false };
    case FETCH_SCENIC_SPOT_FAILED:
      return { ...state, error: payload, isLading: false };
    default:
      return state;
  }
};
