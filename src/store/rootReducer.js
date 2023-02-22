import { combineReducers } from "@reduxjs/toolkit";
import { detailReducer } from "./detail/detail.reducer";
import { eventReducer } from "./event/event.reducer";
import { busReducer } from "./bus/bus.reducer";

export const rootReducer = combineReducers({
  detail: detailReducer,
  event: eventReducer,
  bus: busReducer,
});
