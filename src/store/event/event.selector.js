import { createSelector } from "@reduxjs/toolkit";

const selectEventReducer = (state) => state.event;

export const selectEventList = createSelector(
  [selectEventReducer],
  (event) => event.eventList
);

export const selectEventListMap = createSelector(
  [selectEventList],
  (eventList) =>
    eventList.reduce((acc, event) => {
      const {
        ActivityName: Title,
        Address,
        Description,
        Location,
        Picture,
        Phone,
        Charge,
        Cycle,
        StartTime,
        EndTime,
      } = event;
      acc.push({
        Title,
        Address,
        Description,
        Location,
        Picture,
        Phone,
        Charge,
        Cycle,
        StartTime,
        EndTime,
      });
      return acc;
    }, [])
);

export const selectEventIsLoading = createSelector(
  [selectEventReducer],
  (event) => event.isLoading
);
