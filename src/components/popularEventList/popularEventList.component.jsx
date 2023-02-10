import ContentCard from "../UI/contentCard/contentCard.component";

import { EventListLayout, EventCard } from "./popularEvent.styles";

const PopularEventList = () => {
  return (
    <ContentCard>
      <EventListLayout>
        <EventCard>Temp</EventCard>
        <EventCard>Temp</EventCard>
        <EventCard>Temp</EventCard>
        <EventCard>Temp</EventCard>
      </EventListLayout>
    </ContentCard>
  );
};

export default PopularEventList;
