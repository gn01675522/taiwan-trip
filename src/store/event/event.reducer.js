import { EVENT_ACTIONS_TYPE } from "./event.types";

const { FETCH_EVENT_START, FETCH_EVENT_SUCCESS, FETCH_EVENT_FAILED } =
  EVENT_ACTIONS_TYPE;

const INITIAL_STATE = {
  eventList: [],
  isLoading: false,
  error: null,
};

export const eventReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_EVENT_START:
      return { ...state, isLoading: true };
    case FETCH_EVENT_SUCCESS:
      return { ...state, eventList: payload, isLoading: false };
    case FETCH_EVENT_FAILED:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};
