import { useState } from "react";

import Button, { BUTTON_TYPE_CLASSES } from "../UI/button/button.component";
import ContentCard from "../UI/contentCard/contentCard.component";
import { CityListLayout, CityCard } from "./popularCityList.styles";

import { DATA_FOR_LIST_CONTENT } from "../../dummy_data/DUMMY_DATA";

const DATA_SEPARATE = {
  previous: DATA_FOR_LIST_CONTENT.slice(0, 7),
  next: DATA_FOR_LIST_CONTENT.slice(7, DATA_FOR_LIST_CONTENT.length),
};

const previousOrNext = (boolean) => {
  switch (boolean) {
    case false:
      return DATA_SEPARATE.previous;
    case true:
      return DATA_SEPARATE.next;
    default:
      throw new Error(`Unvalid data type of ${boolean}`);
  }
};

const PopularCityList = () => {
  const [isNextPage, setIsNextPage] = useState(false);

  const cityList = previousOrNext(isNextPage);

  const onChangePage = (event) => {
    event.preventDefault();
    setIsNextPage(!isNextPage);
  };

  return (
    <ContentCard>
      <CityListLayout>
        {cityList.map((city, index) => {
          return (
            <CityCard key={city.id} gridArea={index}>
              {city.tcTitle}
            </CityCard>
          );
        })}
      </CityListLayout>
      <Button
        type="button"
        buttonType={BUTTON_TYPE_CLASSES.next}
        onClick={onChangePage}
      />
    </ContentCard>
  );
};

export default PopularCityList;
