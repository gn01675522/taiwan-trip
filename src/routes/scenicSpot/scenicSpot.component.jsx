import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Banner from "../../components/banner/banner.component";
import Container from "../../components/UI/container/container.component";

import ScenicSpotList from "../../components/scenicSpotList/scenicSpotList.component";

import { PAGE_TYPE } from "../../dummy_data/DUMMY_DATA";

import { fetchScenicSpotAsync } from "../../store/scenicSpot/scenicSpot.actions.js";

const ScenicSpot = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchScenicSpotAsync());
  }, []);

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
