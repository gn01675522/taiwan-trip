import { useContext } from "react";

import ListBlock from "../UI/listBlock/listBlock.component";
import ShadowCard from "../UI/shadowCard/shadowCard.component";
import EventCard from "../eventCard/eventCard.component";

import { EventListLayout } from "./popularEvent.styles";
import { EventContext } from "../../contexts/event.context";

const PopularEventList = () => {
  const { popularEvent } = useContext(EventContext);

  return (
    <ListBlock topicType="event">
      <EventListLayout>
        {popularEvent.map((event) => {
          const { ActivityID } = event;
          return (
            <ShadowCard
              key={ActivityID}
              $contentType="me-list"
              $pageType="banner"
            >
              <EventCard eventDetail={event} />
            </ShadowCard>
          );
        })}
      </EventListLayout>
    </ListBlock>
  );
};

export default PopularEventList;
