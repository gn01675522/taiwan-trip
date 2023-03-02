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
import { selectSearchKeyword } from "../../store/search/search.selector";

const Event = () => {
  const { county } = useParams();
  const dispatch = useDispatch();
  const keyword = useSelector(selectSearchKeyword);

  useEffect(() => {
    dispatch(fetchEventListAsync(keyword, county));
  }, [county, keyword]);

  return (
    <>
      <Banner pageType={PAGE_TYPE.scenicSpot} />
      <Container pageType={PAGE_TYPE.scenicSpot}>
        <ListContent topic="event" />
      </Container>
    </>
  );
};

export default Event;
