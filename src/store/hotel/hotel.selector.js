import { createSelector } from "@reduxjs/toolkit";

const selectHotelReducer = (state) => state.hotel;

export const selectHotelList = createSelector(
  [selectHotelReducer],
  (hotel) => hotel.hotelList
);

export const selectHotelIsLoading = createSelector(
  [selectHotelReducer],
  (hotel) => hotel.isLoading
);
