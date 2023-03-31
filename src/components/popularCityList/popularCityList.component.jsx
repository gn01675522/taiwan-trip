//* which use this：
//* 1. home.component.jsx

import { useState, useEffect } from "react";

import Button, { BUTTON_TYPE_CLASSES } from "../UI/button/button.component";
import ListBlock from "../UI/listBlock/listBlock.component";
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
  const [isPcScreen, setIsPcScreen] = useState(window.innerWidth);
  const [isNextPage, setIsNextPage] = useState(false);

  const cityList = previousOrNext(isNextPage);

  const onChangePage = (event) => {
    event.preventDefault();
    setIsNextPage(!isNextPage);
  };

  useEffect(() => {
    const screenWideChange = () => {
      setIsPcScreen(window.innerWidth);
    };

    window.addEventListener("resize", screenWideChange);

    return () => {
      window.removeEventListener("resize", screenWideChange);
    };
  }, [isPcScreen]);

  return (
    <ListBlock topicType="city">
      {isPcScreen >= 1024 ? (
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
                <CityCard key={city.id} gridArea={index} cityList={city} />
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
      ) : (
        <CityListContent>
          <CityListLayout>
            {DATA_FOR_CITY_LIST.map((city, index) => {
              return (
                <CityCard key={city.id} gridArea={index} cityList={city} />
              );
            })}
          </CityListLayout>
        </CityListContent>
      )}
    </ListBlock>
  );
};

export default PopularCityList;

// todo 調整城市列表，
