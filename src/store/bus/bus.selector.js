import { createSelector } from "@reduxjs/toolkit";

const selectBusRoutesReducer = (state) => state.bus;

export const selectBusRoutes = createSelector(
  [selectBusRoutesReducer],
  (routes) => routes.busRoutes
);

export const selectIsLoading = createSelector(
  [selectBusRoutesReducer],
  (routes) => routes.isLoading
);
