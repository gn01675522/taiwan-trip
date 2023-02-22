import { useContext } from "react";

import ListBlock from "../UI/listBlock/listBlock.component";
import ShadowCard from "../UI/shadowCard/shadowCard.component";
import EventCard from "../eventCard/eventCard.component";

import { EventListLayout } from "./popularEvent.styles";
import { EventContext } from "../../contexts/event.context";

const PopularEventList = () => {
  const { popularEvent } = useContext(EventContext);
  console.log(popularEvent);

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
