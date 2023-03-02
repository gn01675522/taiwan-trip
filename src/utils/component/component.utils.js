import { CITY_LIST } from "../../dummy_data/DUMMY_DATA";

export const changeEnTitleToTc = (county) => {
  console.log(county);
  return CITY_LIST.find((city) => {
    console.log(city);
    return city.enTitle === county;
  });
};
