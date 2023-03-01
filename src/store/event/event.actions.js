import { EVENT_ACTIONS_TYPE } from "./event.types";
import { createAction } from "../../utils/reducer/reducer.utils";

import { getTDXEventList } from "../../API/getApiData";

const { FETCH_EVENT_START, FETCH_EVENT_SUCCESS, FETCH_EVENT_FAILED } =
  EVENT_ACTIONS_TYPE;

export const fetchEventListStart = () => createAction(FETCH_EVENT_START);

export const fetchEventListSuccess = (eventList) =>
  createAction(FETCH_EVENT_SUCCESS, eventList);

export const fetchEventListFailed = (error) =>
  createAction(FETCH_EVENT_FAILED, error);

export const fetchEventListAsync = (keyword, county) => {
  return async (dispatch) => {
    dispatch(fetchEventListStart());
    try {
      const eventList = await getTDXEventList(keyword, county);
      dispatch(fetchEventListSuccess(eventList));
    } catch (error) {
      dispatch(fetchEventListFailed(error));
    }
  };
};
