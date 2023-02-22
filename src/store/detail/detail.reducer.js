import { DETAIL_ACTIONS_TYPE } from "./detail.types";

const { SET_DETAIL_MODAL_OPEN, SET_DETAIL_MODAL_DATA } = DETAIL_ACTIONS_TYPE;

const INITIAL_STATE = {
  modalIsOpen: false,
  modalData: {},
  isLoading: false,
  error: null,
};

export const detailReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_DETAIL_MODAL_OPEN:
      return { ...state, modalIsOpen: payload };
    case SET_DETAIL_MODAL_DATA:
      return { ...state, modalData: payload };
    default:
      return state;
  }
};
