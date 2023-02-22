import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Banner from "../../components/banner/banner.component";
import Container from "../../components/UI/container/container.component";
import ShadowCard from "../../components/UI/shadowCard/shadowCard.component";
import BusTimeContent from "../../components/busTimeContent/busTimeContent.component";

import { PAGE_TYPE } from "../../dummy_data/DUMMY_DATA";

import { fetchBusRoutesAsync } from "../../store/bus/bus.actions";

const Traffic = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBusRoutesAsync());
  }, []);

  return (
    <>
      <Banner pageType={PAGE_TYPE.traffic} />
      <Container pageType={PAGE_TYPE.traffic}>
        <ShadowCard
          $contentType={PAGE_TYPE.traffic}
          $pageType={PAGE_TYPE.traffic}
        >
          <BusTimeContent />
        </ShadowCard>
      </Container>
    </>
  );
};

export default Traffic;
