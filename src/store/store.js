import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: undefined,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      [process.env.NODE_ENV !== "production" && thunk, logger].filter(Boolean)
    ),
});
