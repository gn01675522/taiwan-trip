import { useSelector } from "react-redux";

import ListBlock from "../UI/listBlock/listBlock.component";
import EventCard from "../eventCard/eventCard.component";

import { EventListLayout } from "./popularEvent.styles";

import { selectEventListMap } from "../../store/event/event.selector";

const PopularEventList = () => {
  const popularEvent = useSelector(selectEventListMap);

  return (
    <ListBlock topicType="event">
      <EventListLayout>
        {popularEvent.map((event, index) => (
          <EventCard key={index} eventDetail={event} />
        ))}
      </EventListLayout>
    </ListBlock>
  );
};

export default PopularEventList;
