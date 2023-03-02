//* parent element：
//* 1. App.js

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Banner from "../../components/UI/banner/banner.component";
import Container from "../../components/UI/container/container.component";
import ListContent from "../../components/listContent/listContent.component";

import { PAGE_TYPE } from "../../dummy_data/DUMMY_DATA";

import { fetchFoodListAsync } from "../../store/food/food.actions";
import { fetchHotelListAsync } from "../../store/hotel/hotel.actions";

const TOPIC_TYPE = [{ type: "food" }, { type: "hotel" }];

const FoodAndHotel = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoodListAsync());
    dispatch(fetchHotelListAsync());
  }, []);

  return (
    <>
      <Banner pageType={PAGE_TYPE.food} />
      <Container pageType={PAGE_TYPE.food}>
        {TOPIC_TYPE.map((topic, index) => (
          <ListContent key={index} topic={topic.type} />
        ))}
      </Container>
    </>
  );
};

export default FoodAndHotel;
