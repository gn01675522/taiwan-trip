import { SCENIC_SPOT_ACTION_TYPES } from "./scenicSpot.types";
import { createAction } from "../../utils/reducer/reducer.utils";

import { getTDXScenicSpotList } from "../../API/getApiData";

const {
  FETCH_SCENIC_SPOT_START,
  FETCH_SCENIC_SPOT_SUCCESS,
  FETCH_SCENIC_SPOT_FAILED,
} = SCENIC_SPOT_ACTION_TYPES;

export const fetchScenicSpotStart = () => createAction(FETCH_SCENIC_SPOT_START);

export const fetchScenicSpotSuccess = (scenicSpotList) =>
  createAction(FETCH_SCENIC_SPOT_SUCCESS, scenicSpotList);

export const fetchScenicSpotFailed = (error) =>
  createAction(FETCH_SCENIC_SPOT_FAILED, error);

export const fetchScenicSpotAsync = (county) => {
  return async (dispatch) => {
    dispatch(fetchScenicSpotStart());
    try {
      const scenicSpotList = await getTDXScenicSpotList(county);
      dispatch(fetchScenicSpotSuccess(scenicSpotList));
    } catch (error) {
      dispatch(FETCH_SCENIC_SPOT_FAILED, error);
    }
  };
};
