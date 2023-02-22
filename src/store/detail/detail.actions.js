import { createAction } from "../../utils/reducer/reducer.utils";

import { DETAIL_ACTIONS_TYPE } from "../detail/detail.types";

const { SET_DETAIL_MODAL_OPEN, SET_DETAIL_MODAL_DATA } = DETAIL_ACTIONS_TYPE;

export const setModalOpen = (boolean) =>
  createAction(SET_DETAIL_MODAL_OPEN, boolean);

export const setModalData = (data) => createAction(SET_DETAIL_MODAL_DATA, data);
