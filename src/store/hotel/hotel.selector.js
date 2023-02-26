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
        HotelID: id,
        HotelName: title,
        Address: address,
        Description: description,
        Picture: picture,
        Phone: phone,
        OpenTime: during,
      } = hotel;

      const location = address.slice(0, 6);

      acc.push({
        id,
        title,
        address,
        description,
        location,
        picture,
        phone,
        during,
      });

      return acc;
    }, [])
);

export const selectHotelIsLoading = createSelector(
  [selectHotelReducer],
  (hotel) => hotel.isLoading
);
