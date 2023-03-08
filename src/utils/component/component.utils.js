import { CITY_TITLE_EN_TO_TC } from "../../dummy_data/DUMMY_DATA";

export const changeEnTitleToTc = (county) => {
  return CITY_TITLE_EN_TO_TC.find((city) => city.enTitle === county);
};
//* 依照傳入值並至 DUMMY_DATA 搜尋，以將英文轉換成繁體中文
