import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Banner from "../../components/banner/banner.component";
import Container from "../../components/UI/container/container.component";

import EventList from "../../components/eventList/eventList.componet";

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
        <EventList />
      </Container>
    </>
  );
};

export default Event;
