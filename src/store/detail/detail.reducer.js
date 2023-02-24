import { DETAIL_ACTIONS_TYPE } from "./detail.types";

const { SET_DETAIL_MODAL_OPEN, SET_DETAIL_MODAL_DATA } = DETAIL_ACTIONS_TYPE;

const INITIAL_STATE = {
  modalData: {},
  modalIsOpen: false,
  isLoading: false,
  error: null,
};

export const detailReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case SET_DETAIL_MODAL_OPEN:
      return { ...state, modalIsOpen: payload };
    case SET_DETAIL_MODAL_DATA:
      return { ...state, modalData: payload };
    default:
      return state;
  }
};

// Title： 景點、餐廳、活動或飯店名稱
// Address： 景點、餐廳、活動或飯店地址
// Description：景點、餐廳、活動或飯店描述
// Location：景點、餐廳、活動或飯店所在區域
// Picture：景點、餐廳、活動或飯店照片 url
// Phone：景點、餐廳、活動或飯店連絡電話
// Charge：景點、餐廳、活動或飯店花費
// Cycle：景點、餐廳、活動或飯店活動期間
// StartTime：景點、餐廳、活動或飯店開始營業時間
// EndTime：景點、餐廳、活動或飯店結束營業時間
