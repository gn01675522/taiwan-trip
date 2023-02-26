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
        ActivityID: id,
        ActivityName: title,
        Address,
        Description: description,
        Location: location,
        Picture: picture,
        Phone: phone,
        Charge: charge,
        Cycle,
        StartTime,
        EndTime,
      } = event;

      const startTime = StartTime ? StartTime.slice(0, 10) : "";
      const endTime = EndTime ? EndTime.slice(0, 10) : "";

      const during = Cycle ? Cycle : `${startTime} 至 ${endTime}`;

      const address = location.concat(Address);

      acc.push({
        id,
        title,
        address,
        description,
        location,
        picture,
        phone,
        charge,
        during,
        startTime,
        endTime,
      });
      return acc;
    }, [])
);

export const selectEventIsLoading = createSelector(
  [selectEventReducer],
  (event) => event.isLoading
);
