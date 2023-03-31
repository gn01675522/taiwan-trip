import { SCENIC_SPOT_ACTION_TYPES } from "./scenicSpot.types";
import { createAction } from "../../utils/reducer/reducer.utils";

import { getTDXScenicSpotList } from "../../API/getApiData";

const {
  FETCH_SCENIC_SPOT_START,
  FETCH_SCENIC_SPOT_SUCCESS,
  FETCH_SCENIC_SPOT_FAILED,
} = SCENIC_SPOT_ACTION_TYPES;

export const fetchScenicSpotStart = () => createAction(FETCH_SCENIC_SPOT_START);
//* fetch api 開始

export const fetchScenicSpotSuccess = (scenicSpotList) =>
  createAction(FETCH_SCENIC_SPOT_SUCCESS, scenicSpotList);
//* fetch api 成功

export const fetchScenicSpotFailed = (error) =>
  createAction(FETCH_SCENIC_SPOT_FAILED, error);
//* fetch api 失敗

export const fetchScenicSpotAsync = (keyword, county) => {
  return async (dispatch) => {
    dispatch(fetchScenicSpotStart());
    try {
      const scenicSpotList = await getTDXScenicSpotList(keyword, county);
      dispatch(fetchScenicSpotSuccess(scenicSpotList));
    } catch (error) {
      dispatch(FETCH_SCENIC_SPOT_FAILED, error);
    }
  };
};
//* fetch api 的 action，由開始 fetch api 開始，並使用 try catch block 來根據不同進度來打出相對應的 action
