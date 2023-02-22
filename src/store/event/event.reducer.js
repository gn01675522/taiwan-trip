import { EVENT_ACTIONS_TYPE } from "./event.types";

const { SET_EVENT_DATA } = EVENT_ACTIONS_TYPE;

const INITIAL_STATE = {

}

export const eventReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_EVENT_DATA:
      return { ...state, modalIsOpen: payload };
    default:
      return state;
  }
};

