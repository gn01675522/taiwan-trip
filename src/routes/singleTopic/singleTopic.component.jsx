//* parent element：
//* 1. App.js

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Banner from "../../components/UI/banner/banner.component";
import Container from "../../components/UI/container/container.component";

import ListContent from "../../components/listContent/listContent.component";

import { fetchEventListAsync } from "../../store/event/event.actions";
import { fetchHotelListAsync } from "../../store/hotel/hotel.actions";
import { fetchFoodListAsync } from "../../store/food/food.actions";
import { fetchScenicSpotAsync } from "../../store/scenicSpot/scenicSpot.actions.js";

const SingleTopic = ({ whichTopic }) => {
  const { county, keyword } = useParams();
  console.log("inside SingleTopic", county);
  console.log("inside SingleTopic", keyword);
  const dispatch = useDispatch();

  useEffect(() => {
    switch (whichTopic) {
      case "event":
        dispatch(fetchEventListAsync(keyword, county));
        break;
      case "hotel":
        dispatch(fetchHotelListAsync(keyword, county));
        break;
      case "food":
        dispatch(fetchFoodListAsync(keyword, county));
        break;
      case "scenicSpot":
        dispatch(fetchScenicSpotAsync(keyword, county));
        break;
      default:
        return;
    }
  }, [dispatch, keyword, county, whichTopic]);

  return (
    <>
      <Banner pageType={whichTopic} />
      <Container pageType={whichTopic}>
        <ListContent topic={whichTopic} county={county} />
      </Container>
    </>
  );
};

export default SingleTopic;
