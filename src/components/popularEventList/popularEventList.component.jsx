import { useSelector } from "react-redux";

import ListBlock from "../UI/listBlock/listBlock.component";
import ShadowCard from "../UI/shadowCard/shadowCard.component";
import EventCard from "../eventCard/eventCard.component";

import { EventListLayout } from "./popularEvent.styles";

import { selectEventList } from "../../store/event/event.selector";

const PopularEventList = () => {
  const popularEvent = useSelector(selectEventList);

  return (
    <ListBlock topicType="event">
      <EventListLayout>
        {popularEvent.map((event, index) => {
          return (
            <ShadowCard key={index} $contentType="me-list" $pageType="event">
              <EventCard eventDetail={event} />
            </ShadowCard>
          );
        })}
      </EventListLayout>
    </ListBlock>
  );
};

export default PopularEventList;
