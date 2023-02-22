import { BUS_ACTION_TYPES } from "./bus.types";
import { createAction } from "../../utils/reducer/reducer.utils";

import { getTDXBusRoutes } from "../../API/getApiData";

const {
  FETCH_BUS_ROUTES_START,
  FETCH_BUS_ROUTES_SUCCESS,
  FETCH_BUS_ROUTES_FAILED,
} = BUS_ACTION_TYPES;

export const fetchBusRoutesStart = () => createAction(FETCH_BUS_ROUTES_START);

export const fetchBusRoutesSuccess = (busRoutes) =>
  createAction(FETCH_BUS_ROUTES_SUCCESS, busRoutes);

export const fetchBusRoutesFailed = (error) =>
  createAction(FETCH_BUS_ROUTES_FAILED, error);

export const fetchBusRoutesAsync = () => {
  return async (dispatch) => {
    dispatch(fetchBusRoutesStart());
    try {
      const busRoutes = await getTDXBusRoutes();
      dispatch(fetchBusRoutesSuccess(busRoutes));
    } catch (error) {
      dispatch(fetchBusRoutesFailed(error));
    }
  };
};
