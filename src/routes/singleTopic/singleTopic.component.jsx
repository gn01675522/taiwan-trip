//* parent element：
//* 1. App.js

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Banner from "../../components/UI/banner/banner.component";
import Container from "../../components/UI/container/container.component";

import ListContent from "../../components/listContent/listContent.component";

import { PAGE_TYPE } from "../../dummy_data/DUMMY_DATA";

import { fetchEventListAsync } from "../../store/event/event.actions";
import { fetchHotelListAsync } from "../../store/hotel/hotel.actions";
import { fetchFoodListAsync } from "../../store/food/food.actions";
import { fetchScenicSpotAsync } from "../../store/scenicSpot/scenicSpot.actions.js";

import { selectSearchKeyword } from "../../store/search/search.selector";

const SingleTopic = ({ whichTopic }) => {
  const { county } = useParams();
  const dispatch = useDispatch();
  const keyword = useSelector(selectSearchKeyword);

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
  }, [keyword, county, whichTopic]);

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
