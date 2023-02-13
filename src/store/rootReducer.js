import { combineReducers } from "@reduxjs/toolkit";
import { detailReducer } from "./detail/detail.reducer";

export const rootReducer = combineReducers({
  detail: detailReducer,
});
