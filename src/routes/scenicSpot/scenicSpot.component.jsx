//* parent element：
//* 1. App.js

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Banner from "../../components/UI/banner/banner.component";
import Container from "../../components/UI/container/container.component";

import ListContent from "../../components/listContent/listContent.component";

import { PAGE_TYPE } from "../../dummy_data/DUMMY_DATA";

import { fetchScenicSpotAsync } from "../../store/scenicSpot/scenicSpot.actions.js";
import { selectSearchKeyword } from "../../store/search/search.selector";

const ScenicSpot = () => {
  const { county } = useParams();
  const dispatch = useDispatch();
  const keyword = useSelector(selectSearchKeyword);

  useEffect(() => {
    dispatch(fetchScenicSpotAsync(keyword, county));
  }, [keyword, county]);

  return (
    <>
      <Banner pageType={PAGE_TYPE.scenicSpot} />
      <Container pageType={PAGE_TYPE.scenicSpot}>
        <ListContent topic="scenicSpot" county={county} />
      </Container>
    </>
  );
};

export default ScenicSpot;
