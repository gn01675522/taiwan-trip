import { createSelector } from "@reduxjs/toolkit";

const selectEventListReducer = (state) => state.event;

export const selectEventList = createSelector(
  [selectEventListReducer],
  (event) => event.eventList
);

export const selectEventIsLoading = createSelector(
  [selectEventListReducer],
  (event) => event.isLoading
);
