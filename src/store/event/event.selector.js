import { createSelector } from "@reduxjs/toolkit";

const selectEventReducer = (state) => state.event;

export const selectEventList = createSelector(
  [selectEventReducer],
  (event) => event.eventList
);

export const selectEventIsLoading = createSelector(
  [selectEventReducer],
  (event) => event.isLoading
);
