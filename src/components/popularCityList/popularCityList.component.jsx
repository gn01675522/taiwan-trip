import { useState } from "react";

import Button, { BUTTON_TYPE_CLASSES } from "../UI/button/button.component";
import ContentCard from "../UI/contentCard/contentCard.component";
import {
  CityListLayout,
  CityCard,
  BlackArrowBtn,
} from "./popularCityList.styles";

import { DATA_FOR_CONTENT } from "../../dummy_data/DUMMY_DATA";

const testArray = [1, 2, 3, 4, 5, 6, 7];

const PopularCityList = () => {
  const [contentPart, setContentPart] = useState(false);

  return (
    <ContentCard>
      <CityListLayout>
        {/*DATA_FOR_CONTENT.map((city) => {
        return <CityListLayout key={city.id}>{city.tcTitle}</CityListLayout>;
      })*/}
        {testArray.map((number, index) => {
          console.log(index);
          return (
            <CityCard key={number} divIndex={index}>{`test${number}`}</CityCard>
          );
        })}
        <Button buttonType={BUTTON_TYPE_CLASSES.next} />
      </CityListLayout>
    </ContentCard>
  );
};

export default PopularCityList;
