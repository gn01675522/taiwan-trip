import { createSelector } from "@reduxjs/toolkit";

const selectDetailReducer = (state) => state.detail;

export const selectModalOpen = createSelector(
  [selectDetailReducer],
  (modal) => modal.modalIsOpen
);
