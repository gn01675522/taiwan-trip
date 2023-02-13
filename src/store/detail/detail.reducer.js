import { DETAIL_ACTIONS_TYPE } from "./detail.types";

const { SET_DETAIL_MODAL_OPEN } = DETAIL_ACTIONS_TYPE;

const INITIAL_STATE = {
  modalIsOpen: false,
};

export const detailReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_DETAIL_MODAL_OPEN:
      return { ...state, modalIsOpen: payload };
    default:
      return state;
  }
};
