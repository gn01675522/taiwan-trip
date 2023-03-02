//* parent element：
//* 1. App.js

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Banner from "../../components/UI/banner/banner.component";
import Container from "../../components/UI/container/container.component";
import PopularCityList from "../../components/popularCityList/popularCityList.component";
import ListContent from "../../components/listContent/listContent.component";

import { PAGE_TYPE } from "../../dummy_data/DUMMY_DATA";

import { fetchEventListAsync } from "../../store/event/event.actions";
import { fetchFoodListAsync } from "../../store/food/food.actions";

const TOPIC_TYPE = [{ type: "hotEvent" }, { type: "food" }];

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEventListAsync());
    dispatch(fetchFoodListAsync());
  }, []);

  return (
    <>
      <Banner pageType={PAGE_TYPE.home} />
      <Container pageType={PAGE_TYPE.home}>
        <PopularCityList />
        {TOPIC_TYPE.map((topic, index) => (
          <ListContent key={index} topic={topic.type} />
        ))}
      </Container>
    </>
  );
};

export default Home;
