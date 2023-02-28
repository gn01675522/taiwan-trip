import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import Banner from "../../components/banner/banner.component";
import Container from "../../components/UI/container/container.component";

import EventList from "../../components/eventList/eventList.componet";

import { PAGE_TYPE } from "../../dummy_data/DUMMY_DATA";

import { fetchEventListAsync } from "../../store/event/event.actions";

const Event = () => {
  const { county } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEventListAsync(county));
  }, [county]);

  return (
    <>
      <Banner pageType={PAGE_TYPE.scenicSpot} />
      <Container pageType={PAGE_TYPE.scenicSpot}>
        <EventList />
      </Container>
    </>
  );
};

export default Event;
