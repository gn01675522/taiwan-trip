import { HOTEL_ACTION_TYPES } from "./hotel.types";
import { createAction } from "../../utils/reducer/reducer.utils";

import { getTDXHotelList } from "../../API/getApiData";

const { FETCH_HOTEL_START, FETCH_HOTEL_SUCCESS, FETCH_HOTEL_FAILED } =
  HOTEL_ACTION_TYPES;

export const fetchHotelListStart = () => createAction(FETCH_HOTEL_START);

export const fetchHotelListSuccess = (hotelList) =>
  createAction(FETCH_HOTEL_SUCCESS, hotelList);

export const fetchHotelListFailed = (error) =>
  createAction(FETCH_HOTEL_FAILED, error);

export const fetchHotelListAsync = (keyword, county) => {
  return async (dispatch) => {
    dispatch(fetchHotelListStart());
    try {
      const hotelList = await getTDXHotelList(keyword, county);
      dispatch(fetchHotelListSuccess(hotelList));
    } catch (error) {
      dispatch(fetchHotelListFailed(error));
    }
  };
};
