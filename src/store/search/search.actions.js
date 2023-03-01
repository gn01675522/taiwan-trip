import { SEARCH_ACTION_TYPE } from "./search.types";
import { createAction } from "../../utils/reducer/reducer.utils";

const { SET_SEARCH_KEYWORD, SET_SEARCH_CATEGORY, SET_SEARCH_COUNTY } =
  SEARCH_ACTION_TYPE;

export const setSearchKeyword = (keyword) =>
  createAction(SET_SEARCH_KEYWORD, keyword);

export const setSearchCategory = (category) =>
  createAction(SET_SEARCH_CATEGORY, category);

export const setSearchCounty = (county) =>
  createAction(SET_SEARCH_COUNTY, county);
