import { SEARCH_ACTION_TYPE } from "./search.types";

const { SET_SEARCH_KEYWORD, SET_SEARCH_CATEGORY, SET_SEARCH_COUNTY } =
  SEARCH_ACTION_TYPE;

const INITIAL_STATE = {
  searchKeyword: null,
  searchCategory: null,
  searchCounty: null,
  searchHistory: [],
};

export const searchReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SEARCH_KEYWORD:
      return { ...state, searchKeyword: payload };
    case SET_SEARCH_CATEGORY:
      return { ...state, searchCategory: payload };
    case SET_SEARCH_COUNTY:
      return { ...state, searchCounty: payload };
    default:
      return state;
  }
};
