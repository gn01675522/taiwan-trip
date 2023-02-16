import { useState } from "react";

import Button, { BUTTON_TYPE_CLASSES } from "../UI/button/button.component";
import ListBlock from "../UI/listBlock/listBlock.component";
import NormalCard from "../UI/normalCard/normalCard.component";
import CityCard from "../cityCard/cityCard.component";

import { CityListContent, CityListLayout } from "./popularCityList.styles";
import { DATA_FOR_CITY_LIST } from "../../dummy_data/CITY_LIST_DATA";

const DATA_SEPARATE = {
  previous: DATA_FOR_CITY_LIST.slice(0, 7),
  next: DATA_FOR_CITY_LIST.slice(7, DATA_FOR_CITY_LIST.length),
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
    <ListBlock topicType="city">
      <CityListContent>
        {isNextPage && (
          <Button
            type="button"
            btnInWhere="city"
            buttonType={BUTTON_TYPE_CLASSES.previous}
            onClick={onChangePage}
          />
        )}
        <CityListLayout>
          {cityList.map((city, index) => {
            return (
              <NormalCard key={city.id} gridArea={index}>
                <CityCard cityTitle={city.tcTitle} cityImg={city.img} />
              </NormalCard>
            );
          })}
        </CityListLayout>
        {!isNextPage && (
          <Button
            type="button"
            btnInWhere="city"
            buttonType={BUTTON_TYPE_CLASSES.next}
            onClick={onChangePage}
          />
        )}
      </CityListContent>
    </ListBlock>
  );
};

export default PopularCityList;
