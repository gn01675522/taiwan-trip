import { createSelector } from "@reduxjs/toolkit";

const selectHotelReducer = (state) => state.hotel;

export const selectHotelList = createSelector(
  [selectHotelReducer],
  (hotel) => hotel.hotelList
);

export const selectHotelListMap = createSelector(
  [selectHotelList],
  (hotelList) =>
    hotelList.reduce((acc, hotel) => {
      const {
        HotelName: Title,
        Address,
        Description,
        City: Location,
        Picture,
        Phone,
        OpenTime: Cycle,
      } = hotel;

      acc.push({
        Title,
        Address,
        Description,
        Location,
        Picture,
        Phone,
        Cycle,
      });

      return acc;
    }, [])
);

export const selectHotelIsLoading = createSelector(
  [selectHotelReducer],
  (hotel) => hotel.isLoading
);
