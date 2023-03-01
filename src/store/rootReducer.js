import { combineReducers } from "@reduxjs/toolkit";
import { detailReducer } from "./detail/detail.reducer";
import { eventReducer } from "./event/event.reducer";
import { busReducer } from "./bus/bus.reducer";
import { foodReducer } from "./food/food.reducer";
import { hotelReducer } from "./hotel/hotel.reducer";
import { scenicSpotReducer } from "./scenicSpot/scenicSpot.reducer";
import { searchReducer } from "./search/search.reducer";

export const rootReducer = combineReducers({
  detail: detailReducer,
  event: eventReducer,
  food: foodReducer,
  hotel: hotelReducer,
  bus: busReducer,
  scenicSpot: scenicSpotReducer,
  search: searchReducer,
});
