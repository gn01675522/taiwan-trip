import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";

const middlewares = [
  process.env.NODE_ENV === "development" && logger,
  thunk,
].filter(Boolean);

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: undefined,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});
