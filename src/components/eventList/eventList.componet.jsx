import { useSelector } from "react-redux";

import ListBlock from "../UI/listBlock/listBlock.component";
import ScenicSpotCard from "../scenicSpotCard/scenicSpotCard.component";

import { EventListLayout } from "./event.styles";

import { selectEventListMap } from "../../store/event/event.selector";

const EventList = () => {
  const events = useSelector(selectEventListMap);
  return (
    <ListBlock topicType="city">
      <EventListLayout>
        {events.map((event) => (
          <ScenicSpotCard key={event.id} scenicSpotDetail={event} />
        ))}
      </EventListLayout>
    </ListBlock>
  );
};

export default EventList;

//* 暫時使用 scenicSpot Card，未來要將所有給整合在一起
