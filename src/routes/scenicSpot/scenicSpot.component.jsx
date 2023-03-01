import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Banner from "../../components/banner/banner.component";
import Container from "../../components/UI/container/container.component";

import ScenicSpotList from "../../components/scenicSpotList/scenicSpotList.component";

import { PAGE_TYPE } from "../../dummy_data/DUMMY_DATA";

import { fetchScenicSpotAsync } from "../../store/scenicSpot/scenicSpot.actions.js";
import { selectSearchKeyword } from "../../store/search/search.selector";

const ScenicSpot = () => {
  const { county } = useParams();
  const dispatch = useDispatch();
  const keyword = useSelector(selectSearchKeyword);

  useEffect(() => {
    dispatch(fetchScenicSpotAsync(keyword, county));
  }, [county, keyword]);

  return (
    <>
      <Banner pageType={PAGE_TYPE.scenicSpot} />
      <Container pageType={PAGE_TYPE.scenicSpot}>
        <ScenicSpotList />
      </Container>
    </>
  );
};

export default ScenicSpot;
